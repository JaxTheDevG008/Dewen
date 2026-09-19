from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from planner import plan

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000", "https://netlify.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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