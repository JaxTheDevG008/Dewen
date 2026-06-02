import os
from statistics import mode
import requests
import json
from dotenv import load_dotenv
from typer import prompt
load_dotenv()
print("OPENROUTER KEY LOADED:", os.getenv("OPENROUTER_API_KEY") is not None)

def get_priority_suggestion(tasks):
    result = run_ai("priorities", tasks)
    return result

def generate_schedule(tasks):
    result = run_ai("schedule", tasks)
    return result

def run_ai(mode, tasks):
    prompt = build_prompt(mode, tasks)
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