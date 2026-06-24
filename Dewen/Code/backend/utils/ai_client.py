import os
import requests
import json
import re
from datetime import datetime, timedelta

def get_priority_suggestion(tasks):
    result = run_ai("priorities", tasks)
    return result

def generate_schedule(tasks):
    result = run_ai("schedule", tasks)
    return result

def run_ai(mode, data):
    prompt = build_prompt(mode, data)
    raw = call_ai(prompt)
    content = parse_response(raw)
    result = validate_output(mode, content)
    if result is None:
        return {"error": "AI response invalid or could not be parsed"}
    return result

def build_prompt(mode, tasks):
    if mode == "priorities":
        task_list = '\n'.join(
            f"{i+1}. \"{t['title']}\" — due: {t.get('dueDate', 'none')}, "
            f"time: {t.get('dueTime', 'none')}, "
            f"priority: {t.get('priority', 'none')}, "
            f"status: {t.get('status', 'none')}, "
            f"done: {t.get('done', False)}"
            for i, t in enumerate(tasks)
        )

        return f"""You are an expert productivity assistant.
    Return ONLY valid JSON in this format:
    {{"priorities": [{{"title": "...", "reason": "..."}}]}}

    Tasks:
    {task_list}
    """

    if mode == "schedule":
        if not tasks:
            task_list = "No tasks provided. Generate a full productive default day schedule."
        else:
            task_list = '\n'.join(
                f"{i+1}. \"{t['title']}\" — "
                f"due: {t.get('dueDate', 'none')}, "
                f"priority: {t.get('priority', 'none')}, "
                f"duration: {t.get('duration', 30)} minutes"
                for i, t in enumerate(tasks)
            )

        return f"""You are an expert daily scheduling assistant.

    Create a structured daily schedule.

    Return ONLY valid JSON in this format:
    {{
    "schedule": [
        {{
        "time": "9:00 AM - 9:30 AM",
        "task": "Task name",
        "reason": "Why this is scheduled here"
        }}
    ],
    "intro": "short motivational intro",
    "tip": "end-of-day productivity tip"
    }}

    Rules:
    - Include realistic time slots from 9:00 AM onward
    - Insert breaks naturally
    - Prioritize urgent tasks first
    - If no tasks exist, create a full productive default day
    - No markdown, no explanation

    Tasks:
    {task_list}
    """

    if mode == "parse_task":
        return f"""
You are a task extraction system.
Convert the input into a structured JSON task.
Return ONLY valid JSON in this format:
{{
  "title": "...",
  "dueDate": "YYYY-MM-DD or null",
  "dueTime": "HH:MM or null",
  "priority": "low | normal | high",
  "tags": []
}}

Rules:
- Extract intent from natural language
- Remove date and time words from the title
- Convert dates like "Friday" or "tomorrow" into YYYY-MM-DD
- Convert times like "4pm" into 24-hour HH:MM
- If missing info, use null or empty list
- No markdown, no explanation

IMPORTANT:
Return ONLY raw JSON. No markdown. No code blocks. No extra text.

Input:
{tasks}
"""

def call_ai(prompt):
    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {os.getenv('OPENROUTER_API_KEY')}",
            "Content-Type": "application/json"
        },
        json={
            "model": "openai/gpt-oss-120b:free",
            "messages": [{"role": "user", "content": prompt}]
        },
        timeout=20
    )

    return response.json()

def parse_response(data):
    if not data or "choices" not in data:
        print("Bad API response:", data)
        return None

    try:
        return data["choices"][0]["message"]["content"]
    except Exception as e:
        print("Parse error:", e)
        return None

def validate_output(mode, content):
    if mode == "priorities":
        try:
            data = json.loads(content)
        except json.JSONDecodeError:
            print("Invalid JSON")
            return None
        if "priorities" not in data:
            print("Missing 'priorities'")
            return None
        if not isinstance(data["priorities"], list):
            print("'priorities' is not a list")
            return None
        for item in data["priorities"]:
            if "title" not in item or "reason" not in item:
                print("Invalid item:", item)
                return None
        return data
    
    if mode == "schedule":
        try:
            data = json.loads(content)
        except Exception:
            print("Invalid JSON:", content)
            return None
        if "schedule" not in data:
            print("Missing schedule key")
            return None
        if not isinstance(data["schedule"], list):
            print("Schedule is not a list")
            return None
        for item in data["schedule"]:
            if "time" not in item or "task" not in item:
                print("Invalid schedule item:", item)
                return None
        return data

    if mode == "parse_task":
        try:
            data = json.loads(content)
        except json.JSONDecodeError:
            print("Invalid JSON")
            return None
        required_fields = ["title", "dueDate", "priority", "tags"]
        for field in required_fields:
            if field not in data:
                print("Missing field:", field)
                return None
        data.setdefault("dueTime", None)
        if not isinstance(data["tags"], list):
            print("Tags must be a list")
            return None
        return data

WEEKDAYS = {
    "monday": 0,
    "tuesday": 1,
    "wednesday": 2,
    "thursday": 3,
    "friday": 4,
    "saturday": 5,
    "sunday": 6,
}

def next_weekday_date(day_name, reference=None, force_next=False):
    reference = reference or datetime.now()
    target_day = WEEKDAYS[day_name.lower()]
    days_ahead = (target_day - reference.weekday()) % 7
    if force_next and days_ahead == 0:
        days_ahead = 7
    return (reference + timedelta(days=days_ahead)).date().isoformat()

def parse_time_value(match):
    hour = int(match.group("hour"))
    minute = int(match.group("minute") or 0)
    meridiem = (match.group("meridiem") or "").lower().replace(".", "")

    if meridiem == "pm" and hour != 12:
        hour += 12
    elif meridiem == "am" and hour == 12:
        hour = 0

    if hour > 23 or minute > 59:
        return None

    return f"{hour:02d}:{minute:02d}"

def clean_task_title(text):
    cleaned = re.sub(r"\s+", " ", text).strip(" ,.;:-")
    cleaned = re.sub(r"^(remind me to|remember to|please|task to)\s+", "", cleaned, flags=re.I)
    return cleaned.strip(" ,.;:-")

def parse_task_locally(text):
    remaining = text.strip()
    due_date = None
    due_time = None
    priority = "normal"

    priority_match = re.search(r"\b(high|medium|normal|low)\s+priority\b|\bpriority\s+(high|medium|normal|low)\b", remaining, flags=re.I)
    if priority_match:
        priority = (priority_match.group(1) or priority_match.group(2)).lower()
        remaining = (remaining[:priority_match.start()] + " " + remaining[priority_match.end():]).strip()

    relative_date_match = re.search(r"\b(today|tomorrow)\b", remaining, flags=re.I)
    if relative_date_match:
        word = relative_date_match.group(1).lower()
        days = 1 if word == "tomorrow" else 0
        due_date = (datetime.now() + timedelta(days=days)).date().isoformat()
        remaining = (remaining[:relative_date_match.start()] + " " + remaining[relative_date_match.end():]).strip()

    weekday_pattern = r"\b(?:(?P<prefix>on|by|due|this|next)\s+)?(?P<weekday>monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b"
    weekday_match = re.search(weekday_pattern, remaining, flags=re.I)
    if weekday_match:
        weekday = weekday_match.group("weekday").lower()
        force_next = (weekday_match.group("prefix") or "").lower() == "next"
        due_date = next_weekday_date(weekday, force_next=force_next)
        remaining = (remaining[:weekday_match.start()] + " " + remaining[weekday_match.end():]).strip()

    time_pattern = (
        r"\b(?:at\s+)?(?P<hour>\d{1,2})"
        r"(?::(?P<minute>[0-5]\d))?"
        r"\s*(?P<meridiem>a\.?m\.?|p\.?m\.?)\b"
        r"|\b(?:at\s+)(?P<hour24>\d{1,2}):(?P<minute24>[0-5]\d)\b"
    )
    time_match = re.search(time_pattern, remaining, flags=re.I)
    if time_match:
        if time_match.group("hour24"):
            hour = int(time_match.group("hour24"))
            minute = int(time_match.group("minute24"))
            if hour <= 23:
                due_time = f"{hour:02d}:{minute:02d}"
        else:
            due_time = parse_time_value(time_match)
        remaining = (remaining[:time_match.start()] + " " + remaining[time_match.end():]).strip()

    title = clean_task_title(remaining) or text.strip()
    parsed_anything = due_date is not None or due_time is not None or priority != "normal"

    return {
        "parsed": parsed_anything,
        "task": {
            "title": title,
            "dueDate": due_date,
            "dueTime": due_time,
            "priority": priority,
            "tags": [],
            "status": "todo",
        },
    }

def parse_natural_language(text):
    local = parse_task_locally(text)
    if local["parsed"]:
        return local["task"]

    result = run_ai("parse_task", text)
    if not isinstance(result, dict) or result.get("error"):
        return local["task"]

    local_task = local["task"]
    result.setdefault("dueTime", None)
    result.setdefault("status", "todo")
    result.setdefault("tags", [])
    result["title"] = clean_task_title(result.get("title") or local_task["title"])
    return result
