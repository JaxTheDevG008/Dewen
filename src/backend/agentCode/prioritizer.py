import json
from openai import OpenAI, AuthenticationError
from tools import validateAction

def prioritize(instruction, tasks, apiKey):
    if not apiKey:
        raise ValueError("An API key is required to run the prioritizer agent.")

    client = OpenAI(api_key=apiKey)
    try:
        response = client.responses.create(
            model="gpt-5-mini",
            instructions="""
You are the Dewen Prioritizer Agent.

Your job is to analyze the user's current Dewen tasks and determine which tasks deserve higher or lower priority based on the user's instruction.

Consider factors such as:
- Due dates and due times
- Task status
- Whether a task is blocked
- Existing priority
- The user's stated goal or request
- Dependencies between tasks

Do not create or delete tasks. Only modify task priority through prioritizeTask actions.

Return only valid JSON using this structure:
[
    {
        "action": "prioritizeTask",
        "taskId": "The ID of the task",
        "priority": "High"
    }
]

The priority must be exactly one of:
"High", "Medium", "Low", "None"

Only return actions for tasks whose priority should change.
""",
            input=f"""
User instruction:
{instruction}

Current Dewen tasks:
{json.dumps(tasks)}
"""
        )
        
    except AuthenticationError:
        raise ValueError("Invalid API key provided for AI services.")
    
    actions = json.loads(response.output_text)
    for action in actions:
        validateAction(action)
        
    return actions