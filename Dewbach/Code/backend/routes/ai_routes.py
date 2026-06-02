from flask import Blueprint, request, jsonify
from utils.ai_client import generate_schedule, get_priority_suggestion

print("AI routes loaded")

ai_routes = Blueprint("ai_routes", __name__)
@ai_routes.route("/api/ai/priorities", methods=["POST"])
@ai_routes.route("/api/ai/schedule", methods=["POST"])

def priorities():
    tasks = request.json.get("tasks", [])
    result = get_priority_suggestion(tasks)
    return jsonify(result)

def schedule():
    tasks = request.json.get("tasks", [])
    result = generate_schedule(tasks)
    return jsonify(result)