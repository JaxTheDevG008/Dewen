import type { Task } from "../../types/tasks";
import { elements } from "../../ui/elements";
import type { Priority, Status, Recurrence } from "../../types/tasks";

const { 
    taskList,
    noTasksYetAlert, 
    taskInput, 
    taskPrioritySelector, 
    taskDateInput, 
    taskTimeInput, 
    taskStatusSelector, 
    taskRecurrenceSelector, 
    addTaskBtn, 
    taskCreationDiv,
    toDoList,
    focusTimer,
    blockedByInput, 
    toDoDropZone,
    inProgressDropZone,
    allDoneDropZone,
    taskViewSelector,
    dropZones
} = elements;

export function createTask(taskData: Partial<Task>) {
  const title = String(taskData.title || "").trim();
  if (!title) return null;

  const { dueDate, dueTime } = normalizeTaskDateTime(
    taskData.dueDate as string | null,
    taskData.dueTime as string | null,
  );
  const recurrence = dueDate ? taskData.recurrence || "none" : "none";
  const task = {
    id: taskData.id || crypto.randomUUID(),
    title,
    priority: normalizeTaskPriority(taskData.priority || "None"),
    dueDate,
    dueTime,
    status: normalizeTaskStatus(taskData.status || "To Do"),
    completed: Boolean(taskData.completed),
    tags: taskData.tags || [],
    createdAt: taskData.createdAt || Date.now(),
    recurrence,
    lastCompleted: taskData.lastCompleted || null,
  };

  tasks.push(task);
  saveTasks();
  renderTasks(currentTaskSort);
  renderCalendarEvents();
  refreshTaskDropdown();
  updateTasksDoneCount();
  addActivity(`Added task: ${title}`, "task");

  return task;
}

export function addTask() {
  const task = createTask({
    title: taskInput?.value,
    priority: taskPrioritySelector?.value as Priority,
    dueDate: taskDateInput?.value || null,
    dueTime: taskTimeInput?.value || null,
    status: taskStatusSelector?.value as Status,
    recurrence: taskRecurrenceSelector?.value as Recurrence,
  });
  if (!task) return;

  if (toDoList) toDoList.style.height = "328.5px";
  if (focusTimer) focusTimer.style.height = "330px";
  if (taskCreationDiv) taskCreationDiv.style.display = "none";
  if (taskInput) taskInput.value = "";
  if (taskPrioritySelector) taskPrioritySelector.value = "None";
  if (taskDateInput) taskDateInput.value = "";
  if (taskTimeInput) taskTimeInput.value = "";
  if (taskStatusSelector) taskStatusSelector.value = "To Do";
  if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";
  if (blockedByInput) blockedByInput.value = "disabled";
}

export function getSortedTasks(mode: "dateCreated" | "priority" | "dueDate", tasks: Task[]): Task[] {
  const copy = [...tasks];

  switch (mode) {
    case "dateCreated":
      return copy.sort(
        (a: Task, b: Task) => new Date((b.createdAt || 0)).getTime() - new Date((a.createdAt || 0)).getTime(),
      );

    case "priority": {
      const weight = { High: 3, Medium: 2, Low: 1, None: 0 };
      return copy.sort(
        (a: Task, b: Task) => (weight[b.priority] ?? 0) - (weight[a.priority] ?? 0),
      );
    }

    case "dueDate": {
      return copy.sort((a: Task, b: Task) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });
    }

    default:
      return copy;
  }
}

export function normalizeTaskPriority(priority: string | null) {
  const normalized = String(priority || "").toLowerCase();
  if (normalized === "high") return "High";
  if (normalized === "medium") return "Medium";
  if (normalized === "low") return "Low";
  return "None";
}

export function normalizeTaskStatusLabel(status: string | null) {
  const normalized = normalizeTaskStatus(status);
  if (normalized === "done") return "Done";
  if (normalized === "in-progress") return "In Progress";
  return "To Do";
}