allowedActions = [
    "scheduleTask",
    "updateTask",
    "createTask",
    "deleteTask",
    "createNote",
    "prioritizeTask",
    "organizeTask",
    "organizeNote",
]


def validateAction(action):
    if not isinstance(action, dict):
        raise ValueError("Action must be an object.")

    actionType = action.get("action")
    if actionType not in allowedActions:
        raise ValueError(
            f"Invalid action type: {actionType}. " 
            f"Allowed actions are: {allowedActions}"
        )

    if actionType == "scheduleTask":
        required = ["taskId", "dueDate", "dueTime"]
    if actionType == "updateTask":
        required = ["taskId", "changes"]
    if actionType == "createTask":
        required = ["task"]
    if actionType == "deleteTask":
        required = ["taskId"]
    if actionType == "createNote":
        required = ["note"]
    if actionType == "prioritizeTask":
        required = ["taskId", "priority"]
    if actionType == "organizeTask":
        required = ["taskId", "newParentId"]
    if actionType == "organizeNote":
        required = ["noteId", "newParentId"]

    for field in required:
        if field not in action:
            raise ValueError(f"Missing required field: {field}")

    return True