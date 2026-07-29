export default function TaskCreation() {
  return (
    <div className="taskCreationDiv">
      <div className="actualTaskCreation">
        <input
          className="taskInput"
          type="text"
          placeholder="What needs to be done?"
        />
      </div>

      <div className="taskAttrCreation">
        <select className="taskPrioritySelector">
          <option className="noPriorityOption" value="None">
            None
          </option>
          <option className="lowPriorityOption" value="Low">
            Low
          </option>
          <option className="mediumPriorityOption" value="Medium">
            Medium
          </option>
          <option className="highPriorityOption" value="High">
            High
          </option>
        </select>
        <input className="taskDateInput" type="date" />
        <input className="taskTimeInput" type="time" />
        <select className="taskStatusSelector">
          <option className="toDoStatus" value="To Do">
            To Do
          </option>
          <option className="inProgressStatus" value="In Progress">
            In Progress
          </option>
          <option className="blockedStatus" value="Blocked">
            Blocked
          </option>
          <option className="doneStatus" value="Done">
            Done
          </option>
        </select>
        <select className="taskRecurrenceSelector">
          <option className="noRecurrenceOption" value="none">
            None
          </option>
          <option className="dailyRecurrenceOption" value="daily">
            Daily
          </option>
          <option className="weeklyRecurrenceOption" value="weekly">
            Weekly
          </option>
          <option className="monthlyRecurrenceOption" value="monthly">
            Monthly
          </option>
          <option className="yearlyRecurrenceOption" value="yearly">
            Yearly
          </option>
        </select>
      </div>

      <div className="blockedByDiv">
        <label htmlFor="blockedByInput" className="blockedByLabel">
          Blocked By:
        </label>
        <select id="blockedByInput" autoComplete="off">
          <option value="disabled" disabled selected>
            Select a task
          </option>
        </select>
      </div>

      <div className="addAndCancelTaskButtons">
        <button className="cancelTaskCreationBtn">Cancel</button>
        <button type="button" className="addTaskBtn">
          <img
            className="addTaskBtnIcon"
            src="/Images/Add-Task-Icon.png"
            alt="Add Task Icon"
          />
          Add Task
        </button>
      </div>
    </div>
  );
}
