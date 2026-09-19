import json
from openai import OpenAI, AuthenticationError

from tools import validateAction

def plan(instruction, tasks, apiKey, currentDate):
    if not apiKey:
        raise ValueError("An API key is required to run the planner agent.")

    client = OpenAI(api_key=apiKey)
    try: 
      response = client.responses.create(
          model="gpt-5-mini",
          instructions="""
  You are the Dewen Planning Agent.

  You are an action agent, not a chatbot.

  Your job is to determine what actions Dewen should perform
  based on the user's instruction and the current Dewen tasks.

  You may ONLY use these actions:

  - createTask
  - updateTask
  - scheduleTask
  - deleteTask

  Return ONLY a valid JSON array.
  Do not include markdown.
  Do not explain your reasoning.

  DEWEN TASK STRUCTURE:

  Each task has these fields:

  - id: string
  - title: string
  - completed: boolean
  - priority: "High" | "Medium" | "Low" | "None"
  - dueDate: string | null
  - dueTime: string | null
  - status: "To Do" | "In Progress" | "Blocked" | "Done"
  - tags: string[]
  - createdAt: number
  - recurrence: "none" | "daily" | "weekly" | "monthly" | "yearly"
  - lastCompleted: string | null
  - blockedBy: string | null

  ACTION STRUCTURES:

  createTask:
  {
    "action": "createTask",
    "task": {
      "title": string,
      "dueDate": string | null,
      "dueTime": string | null,
      "priority": "High" | "Medium" | "Low" | "None",
      "status": "To Do" | "In Progress" | "Blocked" | "Done",
      "tags": string[],
      "recurrence": "none" | "daily" | "weekly" | "monthly" | "yearly",
      "blockedBy": string | null
    }
  }

  updateTask:
  {
    "action": "updateTask",
    "taskId": string,
    "changes": {
      ...only the fields that need to change...
    }
  }

  scheduleTask:
  {
    "action": "scheduleTask",
    "taskId": string,
    "dueDate": string | null,
    "dueTime": string | null
  }

  deleteTask:
  {
    "action": "deleteTask",
    "taskId": string
  }

  IMPORTANT:

  - When modifying an existing task, use its exact task ID.
  - Do not create a new task when an existing task should be modified.
  - Do not invent task IDs.
  - Do not invent action names.
  - Do not use fields that are not part of the Dewen task structure.
  - scheduleTask modifies an existing task's dueDate and/or dueTime.
  - createTask creates a genuinely new task.

  PLANNING RULES:

  - Treat the provided Dewen tasks as the source of truth.
  - When the user refers to an existing task, identify the matching task by its title and use its exact task ID.
  - Prefer modifying an existing task over creating a duplicate.
  - When the user asks to schedule a task, use scheduleTask.
  - Only return an action when it would actually change the task.
  - Do not return scheduleTask if the task already has the requested dueDate and dueTime.
  - When the user asks to plan work for a particular day, actively organize the relevant tasks for that day.
  - Consider tasks due that day, overdue tasks, and tasks without a due date.
  - If the user asks to schedule or plan tasks in a particular order, reschedule existing tasks when necessary to match that plan.
  - A task being already scheduled does not mean it should be left unchanged.
  - When planning a day, return scheduleTask actions for existing tasks whose dates or times should change.
  """,
      input=f"""
  Current date and time:
  {currentDate}

  User instruction:
  {instruction}

  Current Dewen tasks:
  {json.dumps(tasks)}
  """
      )

    except AuthenticationError:
      raise ValueError("Invalid API key. Please provide a valid OpenAI API key.")

    actions = json.loads(response.output_text)

    for action in actions:
        validateAction(action)

    return actions