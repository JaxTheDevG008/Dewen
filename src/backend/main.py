from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from agentCode.planner import plan
from agentCode.researcher import research
from agentCode.prioritizer import prioritize

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000", "https://dewen.netlify.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Dewen API Engine is running"}

@app.get("/health")
def healthCheck():
    return {"status": "healthy"}

@app.post("/plan")
def createPlan(data: dict):
    instruction = data.get("instruction", "")
    tasks = data.get("tasks", [])
    apiKey = data.get("apiKey", "")
    currentDate = data.get("currentDate", "")

    try:
        result = plan(instruction, tasks, apiKey, currentDate)
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error))

    return {"plan": result}

@app.post("/research")
def createResearch(data: dict):
    instruction = data.get("instruction", "")
    apiKey = data.get("apiKey", "")
    tavilyApiKey = data.get("tavilyApiKey", "")

    try:
        result = research(instruction, apiKey, tavilyApiKey)
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error))

    return {"research": result}

@app.post("/prioritize")
def createPrioritize(data: dict):
    instruction = data.get("instruction", "")
    tasks = data.get("tasks", [])
    apiKey = data.get("apiKey", "")

    try:
        result = prioritize(instruction, tasks, apiKey)
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error))

    return {"priorities": result}
