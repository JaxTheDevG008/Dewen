from fastapi import APIRouter
from utils.ai_client import generate_schedule, get_priority_suggestion, parse_natural_language

router = APIRouter()

@router.post("/api/ai/priorities")
def priorities(payload: dict):
    tasks = payload.get("tasks", [])
    return get_priority_suggestion(tasks)

@router.post("/api/ai/schedule")
def schedule(payload: dict):
    tasks = payload.get("tasks", [])
    return generate_schedule(tasks)

@router.post("/api/ai/parse-task")
def parse_task(payload: dict):
    text = payload.get("text", "")
    result = parse_natural_language(text)
    if not isinstance(result, dict) or result.get("error"):
        return {
            "title": text,
            "priority": "normal",
            "dueDate": None,
            "dueTime": None,
            "status": "todo",
            "tags": []
        }
    return result
