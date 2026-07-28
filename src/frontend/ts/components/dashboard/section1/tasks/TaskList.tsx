import TaskCreation from "./TaskCreation";

export default function TaskList() {
  return (
    <section className="toDoList">
      <div className="toDoListHeader">
        <h1 className="toDoListName">Tasks</h1>
        <div className="options">
          <select className="taskSortSelector">
            <option value="dateCreated">Date Created</option>
            <option value="priority">Priority</option>
            <option value="dueDate">Due Date</option>
          </select>
          <select className="taskViewSelector">
            <option value="listView">List View</option>
            <option value="KanbanView">Kanban Board</option>
            <option value="timelineView">Timeline View</option>
          </select>
          <button className="addBtn">Add</button>
        </div>

        <hr className="toDoListLineSplit" />
      </div>

      <div className="noTasksYetAlert">
        <img src="/Images/No-Tasks-Yet-Icon.png" className="noTasksYetIcon" />
        <h2 className="noTasksYet">No tasks yet</h2>
        <p className="tinyTasksTip">Add a task to get started.</p>
      </div>

      <TaskCreation/>

      <div className="mainToDoListContent">
        <ul className="taskList"></ul>

        <div className="dropZones">
          <div className="toDoDropZone" data-status="todo">
            To Do
          </div>
          <div className="inProgressDropZone" data-status="in-progress">
            In Progress
          </div>
          <div className="allDoneDropZone" data-status="done">
            Completed
          </div>
        </div>
      </div>
    </section>
  );
}
