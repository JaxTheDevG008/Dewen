import { Calendar, type EventMountArg } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid/index.js";
import interactionPlugin, { type DateClickArg } from "@fullcalendar/interaction/index.js";

function getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Element not found: ${selector}`);
  return element;
}

function getAllElements<T extends HTMLElement>(selector: string): NodeListOf<T> {
  return document.querySelectorAll<T>(selector);
}

const overlay = getElement<HTMLDivElement>(".overlay");
const askForNotifications = getElement<HTMLDivElement>(".askForNotifications");
const enableNotificationsBtn = getElement<HTMLButtonElement>(
  ".enableNotificationsBtn",
);
const closeNotiPopup = getElement<HTMLButtonElement>(".closeNotiPopup");
const sidebar = getElement<HTMLDivElement>(".sidebar");
const sidebarBtns = getAllElements<HTMLButtonElement>(".sidebar button");
const hamburgerBtn = getElement<HTMLButtonElement>(".hamburgerBtn");
const whatToFocusOn = getElement<HTMLDivElement>(".whatToFocusOn");
const focusOnList = getElement<HTMLUListElement>(".focusOnList");
const header = getElement<HTMLHeadElement>(".header");
const searchDiv = getElement<HTMLDivElement>(".searchDiv");
const searchBar = getElement<HTMLInputElement>(".searchBar");
const searchResultsMenu = getElement<HTMLDivElement>(".searchResultsMenu");
const dashboardBtn = getElement<HTMLButtonElement>(".dashboardBtn");
const calendarBtn = getElement<HTMLButtonElement>(".calendarBtn");
const settingsBtn = getElement<HTMLButtonElement>(".settingsBtn");
const dashboardContent = getElement<HTMLDivElement>(".dashboardContent");
const dashboardHeader = getElement<HTMLDivElement>(".dashboardHeader");
const agentBtn = getElement<HTMLButtonElement>(".agentBtn");
const aiToggle = (document.getElementById("aiToggle") as HTMLInputElement | null) || (() => { throw new Error("AI Toggle not found"); })();
const aiOptionsDiv = getElement<HTMLDivElement>(".aiOptionsDiv");
/** const aiOptionsList = getElement<HTMLUListElement>(".aiOptionsList"); */
const prioritySuggestionOption = getElement<HTMLButtonElement>(
  ".prioritySuggestionOption",
);
/** const scheduleSuggestionOption = getElement<HTMLButtonElement>(
  ".scheduleSuggestionOption",
);
const riskReportOption = getElement<HTMLButtonElement>(".riskReportOption"); */
const aiDiv = getElement<HTMLElement>(".aiDiv");
const decrastinatorBtn = getElement<HTMLButtonElement>(".decrastinatorBtn");
const closeDecrastinatorBtn = getElement<HTMLButtonElement>(".closeDecrastinatorBtn");
const customizeBtn = getElement<HTMLButtonElement>(".customizeBtn");
const customizeDiv = getElement<HTMLDivElement>(".customizeDiv");
const customizeBgOptions = getAllElements<HTMLButtonElement>(
  ".customizeBgOptions button",
);
const currentDate = getElement<HTMLDivElement>(".currentDate");
const dynamicGreeting = getElement<HTMLHeadingElement>(".greeting");
const expandMiniAnalyticsBtn = getElement<HTMLButtonElement>(".expandMiniAnalyticsBtn");
const miniAnalytics = getElement<HTMLDivElement>(".miniAnalytics");
/* const momentumItems = getElement<HTMLUListElement>(".momentumItems");
const momentumDivFooter = getElement<HTMLDivElement>(".momentumDivFooter");
const workAreaSplit = getElement<HTMLDivElement>(".workAreaSplit"); */
const section1 = getElement<HTMLDivElement>(".section1");
const section2 = getElement<HTMLDivElement>(".section2");
const toDoList = getElement<HTMLUListElement>(".toDoList");
const toDoListHeader = getElement<HTMLDivElement>(".toDoListHeader");
const taskSortSelector = getElement<HTMLSelectElement>(".taskSortSelector");
const taskViewSelector = getElement<HTMLSelectElement>(".taskViewSelector");
const addBtn = getElement<HTMLButtonElement>(".addBtn");
const taskCreationDiv = getElement<HTMLDivElement>(".taskCreationDiv");
/** const actualTaskCreation = getElement<HTMLDivElement>(".actualTaskCreation"); */
const taskInput = getElement<HTMLInputElement>(".taskInput");
/** const taskAttrCreation = getElement<HTMLDivElement>(".taskAttrCreation"); */
const taskPrioritySelector = getElement<HTMLSelectElement>(".taskPrioritySelector");
const taskDateInput = getElement<HTMLInputElement>(".taskDateInput");
const taskTimeInput = getElement<HTMLInputElement>(".taskTimeInput");
const taskStatusSelector = getElement<HTMLSelectElement>(".taskStatusSelector");
const taskRecurrenceSelector = getElement<HTMLSelectElement>(
  ".taskRecurrenceSelector",
);
const blockedByDiv = getElement<HTMLDivElement>(".blockedByDiv");
const blockedByInput = getElement<HTMLInputElement>(".blockedByInput");
/** const blockedByList = getElement<HTMLUListElement>(".blockedByList");
const addAndCancelButtons = getElement<HTMLDivElement>(".addAndCancelButtons");  */
const cancelTaskCreationBtn = getElement<HTMLButtonElement>(".cancelTaskCreationBtn");
const addTaskBtn = getElement<HTMLButtonElement>(".addTaskBtn");
const taskList = getElement<HTMLUListElement>(".taskList");
const noTasksYetAlert = getElement<HTMLDivElement>(".noTasksYetAlert");
const dropZones = getElement<HTMLDivElement>(".dropZones");
const toDoDropZone = getElement<HTMLDivElement>(".toDoDropZone");
const inProgressDropZone = getElement<HTMLDivElement>(".inProgressDropZone");
const allDoneDropZone = getElement<HTMLDivElement>(".allDoneDropZone");
const focusTimer = getElement<HTMLDivElement>(".focusTimer");
const timerOptionsDropdown = getElement<HTMLSelectElement>(".timerOptionsDropdown");
const taskSelectionDropdown = getElement<HTMLSelectElement>(".taskSelectionDropdown");
const currentFocusedTask = getElement<HTMLDivElement>(".currentFocusedTask");
/** const timerMinutesDiv = getElement<HTMLDivElement>(".timerMinutesDiv"); */
const timerProgressRing = getElement<HTMLDivElement>(".timerProgressRing");
const timerMinutes = getElement<HTMLDivElement>(".timerMinutes");
const timerButtons = getElement<HTMLDivElement>(".timerButtons");
const lengthButtons = getAllElements<HTMLButtonElement>(".timerLengthOptions button");
const startTimerBtn = getElement<HTMLButtonElement>(".startTimerBtn");
const pauseTimerBtn = getElement<HTMLButtonElement>(".pauseTimerBtn");
const restartTimerBtn = getElement<HTMLButtonElement>(".restartTimerBtn");
const themeBtn = getElement<HTMLButtonElement>(".themeBtn");
/** const notes = getElement<HTMLDivElement>(".notes"); */
const addBtn2 = getElement<HTMLButtonElement>(".addBtn2");
const notesList = getElement<HTMLUListElement>(".notesList");
/** const notesHeader = getElement<HTMLHeadingElement>(".notesHeader"); */
const noNotesYetAlert = getElement<HTMLDivElement>(".noNotesYetAlert");
const noteCreationDiv = getElement<HTMLDivElement>(".noteCreationDiv");
const noteInput = getElement<HTMLInputElement>(".noteInput");
const noteColorOptions = getAllElements<HTMLButtonElement>(".noteColorOptions button");
const cancelNoteCreationBtn = getElement<HTMLButtonElement>(".cancelNoteCreationBtn");
const addNoteBtn = getElement<HTMLButtonElement>(".addNoteBtn");
const activityList = getElement<HTMLUListElement>(".activityList");
/** const calendarSection = getElement<HTMLDivElement>(".calendar");
const settingsContent = getElement<HTMLDivElement>(".settingsContent");
const settingsNavigator = getElement<HTMLDivElement>(".settingsNavigator"); */
const settingsNavOptions = getAllElements<HTMLButtonElement>(".settingsNavItem");
const fullNameInput = getElement<HTMLInputElement>(".fullNameInput");
const preferredNameInput = getElement<HTMLInputElement>(".preferredNameInput");
const ai_API_BASE = "http://127.0.0.1:5000";

console.log({
  currentDate,
  dynamicGreeting,
  fullNameInput,
  preferredNameInput,
});

function safeParse(key: string): any[] {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  } catch (e) {
    console.warn(`${key} corrupted, resetting...`);
    localStorage.removeItem(key);
    return [];
  }
}

let tasks = safeParse("tasks");
let allNotes = safeParse("notes");
let decrastinatorIntervalId: number | null = null;
let decrastinatorIsRunning = false;
let isDraggable = false;
let editingNoteColor: string | null = null;
let activityLog = getActivityLog();
let calendar: Calendar | null = null;
let editingTaskId: number | null = null;
let isEditing: boolean = false;
let isAddingSubtask = false;
let currentParentTaskId: number | null = null;
let currentTaskSort = "dueDate";
let focusMode = false;
let timerMode = "focus";
let activeFocusTask: string | undefined;

type Priority = "Low" | "Medium" | "High" | "None";

type Status = "To Do" | "In Progress" | "Blocked" | "Done";

type Recurrence =
    | "none"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  dueDate: string | null;
  dueTime: string | null;
  status: Status;
  tags: string[];
  createdAt: number;
  recurrence: Recurrence;
  lastCompleted: string | null;
  subtasks: Task[];
}

interface Note {
  id: number;
  text: string;
  color: string;
}

interface Activity {
  id: number;
  message: string;
  type: string;
  timestamp: number;
}

function showOverlay() {
  if (!overlay) return;
  overlay.style.display = "block";
  overlay.onclick = null;
}

function hideOverlay() {
  if (!overlay) return;
  overlay.style.display = "none";
  overlay.onclick = null;
}

function createTaskElement(task: Task): HTMLLIElement | null {
  if (noTasksYetAlert) noTasksYetAlert.style.display = "none";

  const taskId = task.id;

  const taskCheckbox = document.createElement("input") as HTMLInputElement;
  taskCheckbox.type = "checkbox";
  taskCheckbox.className = "taskCheckbox";
  taskCheckbox.checked = task.completed;

  const taskText = task.title;

  let taskPriority = task.priority;
  if (taskPriority === "None") taskPriority = "None";

  const taskDate = task.dueDate;

  let formattedDate = "";

  if (taskDate) {
    const dateObject = new Date(taskDate + "T00:00:00");
    formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  const taskTime = task.dueTime;

  const taskStatus = task.status;

  const taskRecurrence = task.recurrence;

  const taskOptionsBtnDiv = document.createElement("div");
  taskOptionsBtnDiv.className = "taskOptionsBtnDiv";

  const taskOptionsBtn = document.createElement("button");
  taskOptionsBtn.className = "taskOptionsBtn";
  taskOptionsBtn.innerHTML = `<img class="taskOptionsBtnIcon" src="Images/Task-Options-Icon.png" alt="Task Options Icon">`;

  const taskOptions = document.createElement("div");
  taskOptions.className = "taskOptions";

  const editOption = document.createElement("div");
  editOption.className = "taskOption";
  editOption.textContent = "Edit";

  const addSubtaskOption = document.createElement("div");
  addSubtaskOption.className = "taskOption";
  addSubtaskOption.textContent = "Add Subtask";

  const deleteOption = document.createElement("div");
  deleteOption.className = "taskOption";
  deleteOption.textContent = "Delete";
  deleteOption.style.color = "red";

  taskOptions.append(editOption, addSubtaskOption, deleteOption);

  const listTask = document.createElement("li");
  listTask.className = "listTask";
  if (task.completed) listTask.classList.add("completed");
  listTask.dataset.dateNotified = "false";
  listTask.dataset.timeNotified = "false";
  listTask.dataset.priority = taskPriority;
  listTask.dataset.dueDate = taskDate ?? undefined;
  listTask.dataset.dueTime = taskTime ?? undefined;
  listTask.dataset.status = taskStatus ?? undefined;
  listTask.dataset.recurrence = taskRecurrence ?? undefined;
  listTask.id = taskId ? `task-${taskId}` : "";

  const mainTask = document.createElement("label") as HTMLLabelElement;
  mainTask.className = "mainTask";
  mainTask.draggable = isDraggable;
  mainTask.dataset.id = taskId ? String(taskId) : "";
  mainTask.addEventListener("mouseenter", () => {
    const taskOptionsBtn = mainTask.querySelector(".taskOptionsBtn");
    if (!taskOptionsBtn) return;

    taskOptionsBtn.classList.add("show");
  });

  mainTask.addEventListener("mouseleave", () => {
    const taskOptionsBtn = mainTask.querySelector(".taskOptionsBtn");
    if (!taskOptionsBtn) return;

    taskOptionsBtn.classList.remove("show");
  });

  mainTask.addEventListener("dragstart", (e) => {
    currentDraggedTask = mainTask;
    mainTask.classList.add("dragging");

    e.dataTransfer?.setData("text/plain", listTask.id);
  });
  mainTask.addEventListener("dragend", () => {
    currentDraggedTask = null;
    mainTask.classList.remove("dragging");
  });

  const taskContents = document.createElement("div");
  taskContents.className = "taskContents";

  const taskTextAndCheckbox = document.createElement("div");
  taskTextAndCheckbox.className = "taskTextAndCheckbox";

  const taskTextSpan = document.createElement("span");
  taskTextSpan.className = "taskTextSpan";
  taskTextSpan.textContent = taskText;
  taskTextSpan.dataset.taskText = taskText;
  taskTextSpan.dataset.originalTaskText = taskTextSpan.textContent;

  const taskAttributes = document.createElement("div");
  taskAttributes.className = "taskAttributes";

  const taskPrioritySpan = document.createElement("span");
  taskPrioritySpan.className = "taskPrioritySpan";
  taskPrioritySpan.textContent = taskPriority;

  const taskDateAndTime = document.createElement("div");
  taskDateAndTime.className = "taskDateAndTime";

  const taskDateAndTimeSpan = document.createElement("span");
  taskDateAndTimeSpan.className = "taskDateAndTimeSpan";

  const taskDateImg = document.createElement("img");
  taskDateImg.className = "taskDateImg";
  taskDateImg.src = "Images/Date-Icon.png";
  taskDateImg.alt = "Date Icon";

  taskDateAndTimeSpan.textContent =
    (formattedDate ? "Due " + formattedDate : "") +
    (taskTime ? " at " + taskTime : "");

  const taskStatusSpan = document.createElement("span");
  taskStatusSpan.className = "taskStatusSpan";
  taskStatusSpan.textContent = taskStatus;

  const taskRecurrenceSpan = document.createElement("span");
  taskRecurrenceSpan.className = "taskRecurrenceSpan";
  let recurrenceText = "";

  if (task.recurrence && task.recurrence !== "none") {
    const recurrenceMap = {
      none: "",
      daily: "Daily",
      weekly: "Weekly",
      monthly: "Monthly",
      yearly: "Yearly",
    };
    recurrenceText = recurrenceMap[task.recurrence] || "";
  }

  if (recurrenceText) {
    const recurrenceImg = document.createElement("img");
    recurrenceImg.className = "taskRecurrenceImg";
    recurrenceImg.src = "Images/Restart-Timer-Icon.png";
    recurrenceImg.alt = "Recurrence Icon";

    taskRecurrenceSpan.appendChild(recurrenceImg);

    const recurrenceTextSpan = document.createElement("span");
    recurrenceTextSpan.className = "taskRecurrenceText";
    recurrenceTextSpan.textContent = recurrenceText;
    taskRecurrenceSpan.appendChild(recurrenceTextSpan);
    taskAttributes.appendChild(taskRecurrenceSpan);
  }

  const urgency = getTaskUrgency(task);
  applyUrgencyStyle(mainTask, urgency);

  const subtaskList = document.createElement("ul");
  subtaskList.className = "subtaskList";

  task.subtasks?.forEach((subtask) => {
    subtaskList.appendChild(createSubtaskElement(subtask));
  });
  listTask.appendChild(subtaskList);

  taskTextAndCheckbox.prepend(taskCheckbox);
  taskCheckbox.addEventListener("change", () => {
    const t = tasks.find((t) => String(t.id) === String(taskId));
    if (!t) return;

    t.completed = taskCheckbox.checked;

    if (t.completed) {
      t.completedAt = Date.now();
    } else {
      t.completedAt = null;
    }

    if (t.completed && t.recurrence !== "none")
      t.lastCompleted = new Date().toISOString();

    listTask.classList.toggle("completed", t.completed);

    saveTasks();
    addActivity(`Completed task: ${task.title}`, "task");
    updateTasksDoneCount();
    renderWhatToFocusOn();
    updateTasksOverdueCount();
    updateTasksDueTodayCount();
  });

  taskTextAndCheckbox.appendChild(taskTextSpan);
  taskContents.appendChild(taskTextAndCheckbox);

  taskAttributes.appendChild(taskPrioritySpan);
  taskDateAndTime.appendChild(taskDateImg);
  taskDateAndTime.appendChild(taskDateAndTimeSpan);

  if (taskDate || taskTime) {
  }

  taskAttributes.appendChild(taskStatusSpan);
  taskAttributes.appendChild(taskRecurrenceSpan);
  taskContents.appendChild(taskAttributes);

  mainTask.appendChild(taskContents);

  taskOptionsBtnDiv.appendChild(taskOptionsBtn);

  taskOptionsBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const rect = taskOptionsBtn.getBoundingClientRect();

    taskOptions.style.position = "fixed";
    taskOptions.style.top = `${rect.bottom}px`;
    taskOptions.style.left = `${rect.left}px`;

    taskOptions.classList.toggle("show");
  });

  document.body.appendChild(taskOptions);

  taskOptions.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  mainTask.appendChild(taskOptionsBtnDiv);
  listTask.appendChild(mainTask);
  updateTasksDoneCount();
  updateTasksOverdueCount();
  updateTasksDueTodayCount();

  editOption.addEventListener("click", () => {
    editingTaskId = Number(taskId);
    isEditing = true;

    taskInput?.blur();

    if (taskInput) taskInput.value = "";
    if (taskPrioritySelector) taskPrioritySelector.value = "None";
    if (taskDateInput) taskDateInput.value = "";
    if (taskTimeInput) taskTimeInput.value = "";
    if (taskStatusSelector) taskStatusSelector.value = "To Do";
    if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";

    const task = tasks.find((t) => String(t.id) === String(editingTaskId));

    taskOptions.classList.remove("show");

    if (taskCreationDiv) document.body.appendChild(taskCreationDiv);

    if (!taskCreationDiv) return;
    taskCreationDiv.style.display = "flex";
    taskCreationDiv.style.position = "fixed";
    taskCreationDiv.style.zIndex = "9999";
    taskCreationDiv.style.top = "50%";
    taskCreationDiv.style.left = "50%";
    taskCreationDiv.style.transform = "translate(-50%, -50%)";

    if (addTaskBtn) {
      addTaskBtn.textContent = "Save Task";
      addTaskBtn.style.padding = "0px 8px";
    }

    showOverlay();

    if (task) {
      if (taskInput) taskInput.value = task.title;
      if (taskPrioritySelector) taskPrioritySelector.value = task.priority || "None";
      if (taskDateInput) taskDateInput.value = task.dueDate || "";
      if (taskTimeInput) taskTimeInput.value = task.dueTime || "";
      if (taskStatusSelector) taskStatusSelector.value = task.status || "To Do";
      if (taskRecurrenceSelector) taskRecurrenceSelector.value = task.dueDate
        ? task.recurrence || "none"
        : "none";
    }
  });

  addSubtaskOption.addEventListener("click", () => {
    isAddingSubtask = true;
    const parentTask = tasks.find((t) => String(t.id) === String(taskId));
    if (!parentTask) return;

    console.log("Selected task:", parentTask);
    console.log("ID:", parentTask.id);
    currentParentTaskId = parentTask.id;

    if (taskInput) taskInput.blur();

    if (taskInput) taskInput.value = "";
    if (taskPrioritySelector) taskPrioritySelector.value = "None";
    if (taskDateInput) taskDateInput.value = "";
    if (taskTimeInput) taskTimeInput.value = "";
    if (taskStatusSelector) taskStatusSelector.value = "To Do";
    if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";

    if (taskCreationDiv) document.body.appendChild(taskCreationDiv);

    if (!taskCreationDiv) return;
    taskCreationDiv.style.display = "flex";
    taskCreationDiv.style.position = "fixed";
    taskCreationDiv.style.zIndex = "9999";
    taskCreationDiv.style.top = "50%";
    taskCreationDiv.style.left = "50%";
    taskCreationDiv.style.transform = "translate(-50%, -50%)";

    if (addTaskBtn) {
      addTaskBtn.textContent = "Add Subtask";
      addTaskBtn.style.padding = "0px 8px";
    }

    taskOptions.style.display = "none";

    showOverlay();
  });

  deleteOption.addEventListener("click", () => {
    const taskIndex = tasks.findIndex((t) => String(t.id) === String(taskId));
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      refreshTaskDropdown();
    }
    saveTasks();

    updateTasksDoneCount();
    updateTasksOverdueCount();
    updateTasksDueTodayCount();
    showNoTasksYet();
    refreshTaskDropdown();
    showNoTasksYet();
    renderCalendarEvents();
    renderWhatToFocusOn();
    addActivity(`Deleted task: ${task.title}`, "delete");
    taskOptions.remove();
    listTask.remove();
    taskOptions.classList.remove("show");
  });
  if (taskList) taskList.appendChild(listTask);

  return listTask;
}

if (cancelTaskCreationBtn) {
  cancelTaskCreationBtn.addEventListener("click", () => {
    if (!taskCreationDiv) return;
    taskCreationDiv.style.display = "none";
    taskCreationDiv.style.position = "relative";
    taskCreationDiv.style.top = "0px";
    taskCreationDiv.style.left = "0px";
    taskCreationDiv.style.transform = "none";
    taskCreationDiv.style.order = "0";
    taskCreationDiv.style.zIndex = "0";

    hideOverlay(); 
    if (toDoList && taskCreationDiv && toDoListHeader) toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);

    if (taskInput) taskInput.value = "";
    if (taskPrioritySelector) taskPrioritySelector.value = "None";
    if (taskDateInput) taskDateInput.value = "";
    if (taskTimeInput) taskTimeInput.value = "";
    if (taskStatusSelector) taskStatusSelector.value = "To Do";
    if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";
  });
};

function getEventColor(priority: "Low" | "Medium" | "High" | "None", isDark: boolean): string {
  if (priority === "Low") return "#90ee90";
  if (priority === "Medium") return "#ffcc00";
  if (priority === "High") return "#ff6b6b";
  if (!priority || priority === "None") {
    return isDark ? "#06bdf9" : "#a9d6fb";
  }
  return isDark ? "#06bdf9" : "#a9d6fb";
}

function addTaskToCalendar(task: Task, overrideDate: string | Date | null = null) {
  if (!task.dueDate || !calendar) return;

  const hasTime = !!task.dueTime;

  const baseDate =
    overrideDate instanceof Date
      ? overrideDate
      : new Date(overrideDate ?? task.dueDate ?? "");
  const dateValue = Number.isNaN(baseDate.getTime())
    ? task.dueDate
    : formatDateInputValue(baseDate);

  const startDate = hasTime ? `${dateValue}T${task.dueTime}:00` : dateValue;

  calendar.addEvent({
    id: `${task.id}-${startDate}`,
    title: task.title,
    start: startDate,
    allDay: !hasTime,
    backgroundColor: getEventColor(task.priority, isDark()),
    extendedProps: {
      taskId: task.id,
      priority: task.priority,
      status: task.status,
    },
  });
}

function getTaskOccurrenceStart(task: Task) {
  if (!task.dueDate) return null;

  const baseDate = task.dueTime
    ? `${task.dueDate}T${task.dueTime}:00`
    : `${task.dueDate}T00:00:00`;
  const date = new Date(baseDate);

  return Number.isNaN(date.getTime()) ? null : date;
}

function getCurrentOccurrence(task: Task, referenceDate = new Date()) {
  const taskOccurrence = getTaskOccurrenceStart(task);
  if (!taskOccurrence) return null;
  if (task.recurrence === "none") return taskOccurrence;

  let currentDate = new Date(taskOccurrence);

  while (currentDate <= referenceDate) {
    const next = addRecurrence(currentDate, task.recurrence);
    if (!next) break;
    currentDate = new Date(next);
  }

  return currentDate;
}

function syncRecurringTasks(now = new Date()) {
  let changed = false;

  tasks.forEach((task) => {
    if (!task?.dueDate || task.recurrence === "none" || !task.completed) return;

    const lastCompleted = task.lastCompleted
      ? new Date(task.lastCompleted)
      : getTaskOccurrenceStart(task);

    if (!lastCompleted || Number.isNaN(lastCompleted.getTime())) return;

    const nextOccurrence = getCurrentOccurrence(task, lastCompleted);
    if (nextOccurrence && now >= nextOccurrence) {
      task.completed = false;
      task.completedAt = null;
      changed = true;
    }
  });

  if (changed) {
    saveTasks();
    renderTasks(currentTaskSort);
    renderCalendarEvents();
    updateTasksDoneCount();
  }

  return changed;
}

function getCalendarRange() {
  if (calendar?.view?.activeStart && calendar?.view?.activeEnd) {
    return {
      startDate: new Date(calendar.view.activeStart),
      endDate: new Date(calendar.view.activeEnd.getTime() - 1),
    };
  }

  const startDate = new Date();
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setHours(23, 59, 59, 999);
  return { startDate, endDate };
}

function getSortedTasks(mode: "dateCreated" | "priority" | "dueDate") {
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

function addRecurrence(inputDate: Date | string, recurrence: "daily" | "weekly" | "monthly" | "yearly") {
  const date = new Date(inputDate);

  switch (recurrence) {
    case "daily":
      date.setDate(date.getDate() + 1);
      break;
    case "weekly":
      date.setDate(date.getDate() + 7);
      break;
    case "monthly":
      date.setMonth(date.getMonth() + 1);
      break;
    case "yearly":
      date.setFullYear(date.getFullYear() + 1);
      break;
    default:
      return null;
  }
  return date;
}

function isDifferentDay(a: Date, b: Date) {
  return (
    a.getFullYear() !== b.getFullYear() ||
    a.getMonth() !== b.getMonth() ||
    a.getDate() !== b.getDate()
  );
}

function isDifferentMonth(a: Date, b: Date) {
  return a.getFullYear() !== b.getFullYear() || a.getMonth() !== b.getMonth();
}

function isDifferentYear(a: Date, b: Date) {
  return a.getFullYear() !== b.getFullYear();
}

function daysSince(a: Date, b: Date) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = b.getTime() - a.getTime();
  return Math.floor(diff / msPerDay);
}

function isTaskDue(task: Task, date = new Date()) {
  if (task.recurrence === "none") return true;
  const last = task.lastCompleted ? new Date(task.lastCompleted) : null;
  const now = new Date(date);

  switch (task.recurrence) {
    case "daily":
      return !last || isDifferentDay(last, now);
    case "weekly":
      return !last || daysSince(last, now) >= 7;
    case "monthly":
      return !last || isDifferentMonth(last, now);
    case "yearly":
      return !last || isDifferentYear(last, now);
    default:
      return false;
  }
}

function getOccurrences(task: Task, start: Date, end: Date) {
  if (!task.dueDate) return [];
  if (task.recurrence === "none") {
    const date = new Date(task.dueDate);
    return date >= start && date <= end ? [date] : [];
  }
  const occurrences = [];
  let current: Date | null = new Date(task.dueDate);

  while (current && current <= end) {
    if (current >= start) {
      occurrences.push(new Date(current));
    }
    current = addRecurrence(current, task.recurrence as "daily" | "weekly" | "monthly" | "yearly");
    if (!current) break;
  }
  
  return occurrences;
}

function getWeekRange(date = new Date()) {
  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);

  const day = startDate.getDay();
  startDate.setDate(startDate.getDate() - day);

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);
  endDate.setHours(23, 59, 59, 999);

  return { startDate, endDate };
}

const { startDate: weekStart, endDate: weekEnd } = getWeekRange();

tasks.forEach((task) => {
  const days = getOccurrences(task, weekStart, weekEnd);
  days.forEach((day) => {
    addTaskToCalendar(task, day);
  });
});

function moveRenderedTasksToKanban(listTask: HTMLElement | null = null) {
  const renderedTasks = document.querySelectorAll(".listTask");

  if (!renderedTasks) return;

  renderedTasks.forEach((listTask) => {
    const mainTask = listTask.querySelector<HTMLElement>(".mainTask");
    if (mainTask) {
      mainTask.draggable = isDraggable;
      mainTask.style.cursor = isDraggable ? "grab" : "default";
    }

    if (listTask instanceof HTMLElement && listTask.dataset.status === "done") {
      if (allDoneDropZone) allDoneDropZone.appendChild(listTask);
    } else if (listTask instanceof HTMLElement && listTask.dataset.status === "in-progress") {
      if (inProgressDropZone) inProgressDropZone.appendChild(listTask);
    } else {
      if (toDoDropZone) toDoDropZone.appendChild(listTask);
    }
  });

  if (taskList) taskList.classList.toggle("drag-mode", isDraggable);
  if (dropZones) dropZones.style.display = isDraggable ? "flex" : "none";
  if (noTasksYetAlert) noTasksYetAlert.style.display = "none";
}

function renderTasks(mode = currentTaskSort) {
  if (taskList) taskList.innerHTML = "";
  if (toDoDropZone) toDoDropZone.innerHTML = "";
  if (inProgressDropZone) inProgressDropZone.innerHTML = "";
  if (allDoneDropZone) allDoneDropZone.innerHTML = "";

  if (!document) return;

  const sorted = getSortedTasks(mode as "dateCreated" | "priority" | "dueDate");
  sorted.forEach((task) => {
    createTaskElement(task);
  });

  if (document.documentElement.classList.contains("isKanbanView")) {
    moveRenderedTasksToKanban();
    if (inProgressDropZone && noTasksYetAlert) inProgressDropZone.appendChild(noTasksYetAlert);
  }

  showNoTasksYet();
  updateTasksDoneCount();
  renderWhatToFocusOn();
}

function setTaskView(taskViewOption = "listView", shouldSave = true) {
  const taskViewOptions = ["listView", "KanbanView", "timelineView"];
  const selectedView = taskViewOptions.includes(taskViewOption)
    ? taskViewOption
    : "listView";
  const isKanbanView = selectedView === "KanbanView";

  if (taskViewSelector) taskViewSelector.value = selectedView;
  if (shouldSave) localStorage.setItem("taskViewOption", selectedView);

  if (!document) return;

  document.documentElement.classList.toggle("isKanbanView", isKanbanView);
  if (dropZones) dropZones.style.display = isKanbanView ? "flex" : "none";
  isDraggable = isKanbanView;
  if (taskList) taskList.classList.toggle("drag-mode", isKanbanView);

  currentTaskSort = taskSortSelector?.value || currentTaskSort || "dateCreated";
  renderTasks(currentTaskSort);
}

if (taskSortSelector) {
  taskSortSelector.addEventListener("change", () => {
    currentTaskSort = taskSortSelector.value;
    renderTasks(currentTaskSort);
  });
};

function createNoteElement(note: Note) {
  if (noNotesYetAlert) noNotesYetAlert.style.display = "none";

  const listNote = document.createElement("li");
  listNote.className = "listNote";
  listNote.id = `note-${note.id}`;

  const mainNote = document.createElement("div");
  mainNote.className = "mainNote";
  if (note.color) mainNote.style.backgroundColor = note.color;
  const mainNoteText = document.createElement("span");
  mainNoteText.className = "mainNoteText";
  mainNoteText.textContent = note.text;
  mainNoteText.dataset.originalNoteText = note.text;
  mainNote.appendChild(mainNoteText);

  const noteOptionsDiv = document.createElement("div");
  noteOptionsDiv.className = "noteOptionsDiv";
  mainNote.appendChild(noteOptionsDiv);
  listNote.appendChild(mainNote);
  if (notesList) notesList.appendChild(listNote);

  const editNoteBtn = document.createElement("button");
  editNoteBtn.className = "editNoteBtn";
  editNoteBtn.style.display = "none";
  editNoteBtn.innerHTML = `<img src="Images/Edit-Icon.png" class="editIcon" alt="Edit Icon">`;
  editNoteBtn.style.backgroundColor = "transparent";
  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.className = "deleteNoteBtn";
  deleteNoteBtn.style.display = "none";
  deleteNoteBtn.innerHTML = `<img src="Images/Delete-Icon.png" class="deleteIcon" alt="Delete Icon">`;
  deleteNoteBtn.style.backgroundColor = "transparent";

  noteOptionsDiv.append(editNoteBtn, deleteNoteBtn);
}

/* normalizes priority so that it can be used for sorting */
function normalizeTaskPriority(priority: string | null) {
  const normalized = String(priority || "").toLowerCase();
  if (normalized === "high") return "High";
  if (normalized === "medium") return "Medium";
  if (normalized === "low") return "Low";
  return "None";
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return null;

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  console.log("Formatted date:", formattedDate);
}

function formatTime(timeStr: string | null) {
  if (!timeStr) return null;

  const [hours, minutes] = timeStr.split(":").map(Number);
  if (isNaN(Number(hours))  || isNaN(Number(minutes))) return timeStr;

  const date = new Date();
  date.setHours(Number(hours), Number(minutes));

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function renderWhatToFocusOn(limit = 3) {
  if (!focusOnList) return;

  const priorityWeight = {
    High: 3,
    Medium: 2,
    Low: 1,
    None: 0,
  };

  const getDueTime = (task: Task) => {
    if (!task.dueDate) return Infinity;
    const time = task.dueTime || "23:59";
    return new Date(`${task.dueDate}T${time}`).getDate();
  };

  const sortedFocusTasks = [...tasks]
    .filter((t) => !t.completed)
    .sort((a, b) => {
      const priorityA = priorityWeight[normalizeTaskPriority(a.priority)] ?? 0;
      const priorityB = priorityWeight[normalizeTaskPriority(b.priority)] ?? 0;
      if (priorityB !== priorityA) return priorityB - priorityA;
      return getDueTime(a) - getDueTime(b);
    })
    .slice(0, limit);

  focusOnList.innerHTML = "";
  if (sortedFocusTasks.length === 0) {
    focusOnList.innerHTML = "<li>No urgent tasks to focus on</li>";
    return;
  }

  sortedFocusTasks.forEach((task) => {
    const focusTaskItem = document.createElement("li");

    const priority = normalizeTaskPriority(task.priority);

    const priorityMarker = document.createElement("img");
    priorityMarker.className = "priorityMarker";
    priorityMarker.src = `Images/Versatile Circle.png`;
    priorityMarker.alt = `${task.priority}`;

    if (priority === "High") {
      priorityMarker.style.filter =
        "invert(47%) sepia(35%) saturate(3501%) hue-rotate(325deg) brightness(105%) contrast(105%)";
      focusTaskItem.appendChild(priorityMarker);
    } else if (priority === "Medium") {
      priorityMarker.style.filter =
        "brightness(0) invert(80%) sepia(50%) saturate(4000%) hue-rotate(15deg) brightness(103%) contrast(105%)";
      focusTaskItem.appendChild(priorityMarker);
    } else if (priority === "Low") {
      priorityMarker.style.filter =
        "brightness(0) saturate(100%) invert(86%) sepia(8%) saturate(1478%) hue-rotate(85deg) brightness(97%) contrast(97%)";
      focusTaskItem.appendChild(priorityMarker);
    }

    const formattedDate = formatDate(task.dueDate);
    const formattedTime = formatTime(task.dueTime);

    const dueDate =
      task.dueDate || task.dueTime
        ? `Due ${formattedDate ? formattedDate : "today"}${formattedTime ? ` at  ${formattedTime}` : ""}`
        : "No due date";
    focusOnList.appendChild(focusTaskItem);

    const focusTaskText = document.createTextNode(`${task.title} (${dueDate})`);
    focusTaskItem.appendChild(focusTaskText);
  });
}

/* normalizes status so that it can be used for sorting */
function normalizeTaskStatusLabel(status: string | null) {
  const normalized = normalizeTaskStatus(status);
  if (normalized === "done") return "Done";
  if (normalized === "in-progress") return "In Progress";
  return "To Do";
}

/* normalizes date and time so that it can be used */
function normalizeTaskDateTime(dueDate: string | null, dueTime: string | null) {
  if (!dueDate) {
    return {
      dueDate: null,
      dueTime: dueTime || null,
    };
  }

  const dateText = String(dueDate);
  const dateTimeMatch = dateText.match(
    /^(\d{4}-\d{2}-\d{2})[T\s](\d{2}:\d{2})/,
  );
  if (dateTimeMatch) {
    return {
      dueDate: dateTimeMatch[1],
      dueTime: dueTime || dateTimeMatch[2],
    };
  }

  return {
    dueDate: dateText.slice(0, 10),
    dueTime: dueTime || null,
  };
}

function formatDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getNextWeekdayDate(dayName: string, forceNext = false) {
  const weekdays = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };
  const today = new Date();
  const targetDay = weekdays[(dayName.toLowerCase() as keyof typeof weekdays)] ?? 0;
  let daysAhead = (targetDay - today.getDay() + 7) % 7;
  if (forceNext && daysAhead === 0) daysAhead = 7;

  const due = new Date(today);
  due.setDate(today.getDate() + daysAhead);
  return formatDateInputValue(due);
}

function parseTimeText(match: RegExpExecArray) {
  if (match.groups?.hour24) {
    const hour = Number(match.groups?.hour24);
    const minute = Number(match.groups?.minute24);
    if (hour > 23 || minute > 59) return null;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }

  let hour = Number(match.groups?.hour);
  const minute = Number(match.groups?.minute || 0);
  const meridiem = match.groups?.meridiem?.toLowerCase().replaceAll(".", "");

  if (meridiem === "pm" && hour !== 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  if (hour > 23 || minute > 59) return null;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function cleanParsedTaskTitle(text: string) {
  return text
    .replace(/\s+/g, " ")
    .replace(
      /^(remind me to|remember to|need to|i need to|please|task to)\s+/i,
      "",
    )
    .replace(/^[\s,.;:-]+|[\s,.;:-]+$/g, "");
}

function parseTaskLocally(text: string) {
  let remaining = text.trim();
  let dueDate = null;
  let dueTime = null;
  let priority = "normal";

  const priorityMatch = remaining.match(
    /\b(high|medium|normal|low)\s+priority\b|\bpriority\s+(high|medium|normal|low)\b/i,
  );
  if (priorityMatch) {
    priority = (priorityMatch[1]?.toLowerCase() || priorityMatch[2]?.toLowerCase()) as "high" | "medium" | "low";
    remaining =
      `${remaining.slice(0, priorityMatch.index)} ${remaining.slice((priorityMatch.index as number) + priorityMatch[0].length)}`.trim();
  }

  const relativeDateMatch = remaining.match(/\b(today|tomorrow)\b/i);
  if (relativeDateMatch) {
    const due = new Date();
    if (relativeDateMatch[1]?.toLowerCase() === "tomorrow") {
      due.setDate(due.getDate() + 1);
    }
    dueDate = formatDateInputValue(due);
    remaining =
      `${remaining.slice(0, relativeDateMatch.index)} ${remaining.slice((relativeDateMatch.index as number) + relativeDateMatch[0].length)}`.trim();
  }

  const weekdayMatch = remaining.match(
    /\b(?:(on|by|due|this|next)\s+)?(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i,
  );
  if (weekdayMatch) {
    dueDate = getNextWeekdayDate(
      weekdayMatch[2]?.toLowerCase() || "",
      (weekdayMatch[1] || "").toLowerCase() === "next",
    );
    remaining =
      `${remaining.slice(0, weekdayMatch.index)} ${remaining.slice((weekdayMatch.index as number) + weekdayMatch[0].length)}`.trim();
  }

  const timeMatch = remaining.match(
    /\b(?:at\s+)?(?<hour>\d{1,2})(?::(?<minute>[0-5]\d))?\s*(?<meridiem>a\.?m\.?|p\.?m\.?)\b|\b(?:at\s+)(?<hour24>\d{1,2}):(?<minute24>[0-5]\d)\b/i,
  );
  if (timeMatch) {
    dueTime = parseTimeText(timeMatch as RegExpExecArray);
    remaining =
      `${remaining.slice(0, timeMatch.index)} ${remaining.slice((timeMatch.index as number) + timeMatch[0].length)}`.trim();
  }

  const title = cleanParsedTaskTitle(remaining) || text.trim();

  return {
    parsed: Boolean(dueDate || dueTime || priority !== "normal"),
    task: {
      title,
      dueDate,
      dueTime,
      priority,
      status: "todo",
      completed: false,
      tags: [],
    },
  };
}

function createTask(taskData: Partial<Task>) {
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

function addTask() {
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

function addNote() {
  const note = {
    id: crypto.randomUUID(),
    text: noteInput?.value.trim(),
    color: selectedNoteColor || null,
  };
  if (!note.text) return;

  allNotes.push(note);
  saveNotes();
  renderNotes();
  addActivity("Added a note", "note");

  if (noteCreationDiv) noteCreationDiv.style.display = "none";
  if (noteInput) noteInput.value = "";
  if (noteInput) noteInput.style.backgroundColor = "";
  selectedNoteColor = null;
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderWhatToFocusOn();
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(allNotes));
}

let selectedIndex = -1;

function updateHighlightedResult(searchResults: NodeListOf<HTMLElement>) {
  searchResults.forEach((item, index) => {
    if (index === selectedIndex) {
      item.style.backgroundColor = isDark() ? "#17171c" : "#f8f8f8";
    } else {
      item.style.backgroundColor = "";
    }
  });

  if (searchResults[selectedIndex]) {
    (searchResults[selectedIndex] as HTMLElement).scrollIntoView({ block: "nearest" });
  }
}

const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
const modifierKey = isMac ? "⌘K" : "Ctrl+K";

const searchBarPlaceholders = [
  `Search for tasks and notes... (${modifierKey})`,
  `Create tasks with ":a <task description>" (${modifierKey})`,
];
let currentIndex = 0;
if (searchBar) searchBar.placeholder = searchBarPlaceholders[0] ?? "";

function rotatePlaceholder() {
  searchBar.classList.add("fade-out");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % searchBarPlaceholders.length;
    searchBar.placeholder = searchBarPlaceholders[currentIndex] ?? "";
    searchBar.classList.remove("fade-out");
  }, 300);
}
setInterval(rotatePlaceholder, 5000);

async function handleSearchKeys(e: KeyboardEvent) {
  const searchResults = document.querySelectorAll<HTMLElement>(".searchResult");
  const isUsingSearch =
    document.activeElement === searchBar ||
    (searchResultsMenu && searchResultsMenu.classList.contains("show"));

  if (!isUsingSearch) return;

  if (e.key === "ArrowDown" && searchResults.length > 0) {
    e.preventDefault();
    selectedIndex = (selectedIndex + 1) % searchResults.length;
  }

  if (e.key === "ArrowUp" && searchResults.length > 0) {
    e.preventDefault();
    selectedIndex =
      (selectedIndex - 1 + searchResults.length) % searchResults.length;
  }

  if (e.key === "Enter") {
    e.preventDefault();
    const input = searchBar?.value.trim();
    if (input && input.startsWith(":a ")) {
      console.log("ai command triggered");
      const text = input.slice(3).trim();
      if (!text) return;
      let taskCreated = false;
      const localParse = parseTaskLocally(text);

      if (localParse.parsed) taskCreated = Boolean(createTask(localParse.task as Partial<Task>));

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      try {
        if (!taskCreated) {
          const res = await fetch(`${ai_API_BASE}/api/ai/parse-task`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
            signal: controller.signal,
          });
          if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
          }
          const task = await res.json();
          console.log(task);
          if (!task || task.error) {
            console.error("ai returned bad task:", task);
          } else {
            taskCreated = Boolean(
              createTask({
                title: task.title,
                priority: task.priority,
                dueDate: task.dueDate,
                dueTime: task.dueTime,
                status: task.status,
                completed: false,
                tags: task.tags || [],
              }),
            );
          }
        }
      } catch (err) {
        console.error("ai task creation failed:", err);
      } finally {
        clearTimeout(timeoutId);
      }

      if (!taskCreated) createTask(localParse.task as Partial<Task>);

      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }
    if (selectedIndex >= 0) {
      (searchResults[selectedIndex] as HTMLElement).click();
      closeSearchBar();
      return;
    }
    console.log({ input, selectedIndex, hasResults: searchResults.length });
    closeSearchBar();
    return;
  }

  if (e.key === "Escape") {
    closeSearchBar();
    return;
  }

  updateHighlightedResult(searchResults);
}

function closeSearchBar() {
  if (searchBar) {
    searchBar.blur();
    searchBar.value = "";
  }
  if (searchResultsMenu) searchResultsMenu.classList.remove("show");
  selectedIndex = -1;
}

function normalizeStr(str: string) {
  return str.toLowerCase().trim();
}

function isWordStart(text: string, index: number) {
  return index === 0 || text[index - 1] === " ";
}

function fuzzyScore(query: string, text: string) {
  const searchQuery = normalizeStr(query);
  const searchText = normalizeStr(text);

  let score = 0;
  let queryIndex = 0;
  let lastMatchIndex = -1;
  let gapPenalty = 0;

  for (let i = 0; i < searchText.length; i++) {
    if (searchText[i] === searchQuery[queryIndex]) {
      score += 2;

      if (lastMatchIndex !== -1) {
        gapPenalty += i - lastMatchIndex - 1;
      }

      lastMatchIndex = i;

      if (isWordStart(searchText, i)) score += 5;

      if (i > 0 && searchText[i - 1] === searchQuery[queryIndex - 1])
        score += 3;

      queryIndex++;

      if (queryIndex === searchQuery.length) break;
    }
  }

  return queryIndex === searchQuery.length
    ? Math.max(score - gapPenalty, 1)
    : 0;
}

function highlightMatch(text: string, query: string) {
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  let result = "";
  let queryIndex = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      queryIndex < normalizedQuery.length &&
      normalizedText[i] === normalizedQuery[queryIndex]
    ) {
      result += `<mark class="matchHighlight">${text[i]}</mark>`;
      queryIndex++;
    } else {
      result += text[i];
    }
  }

  return result;
}

interface SearchResult {
  type: "task" | "note";
  text: string;
  element: HTMLElement;
  score: number;
}

function searchBarMagic() {
  selectedIndex = -1;

  if (!searchBar) return;
  const searchQuery = normalizeStr(searchBar.value);

  if (searchResultsMenu) searchResultsMenu.innerHTML = "";

  if (!searchQuery) {
    searchResultsMenu.style.display = "none";
    return;
  }

  let searchResults: SearchResult[] = [];

  document.querySelectorAll(".listTask").forEach((task) => {
    const taskTextSpanEl = task.querySelector(".taskTextSpan");
    if (!taskTextSpanEl) return;
    const taskText = (taskTextSpanEl as HTMLElement).dataset.originalTaskText;
    if (!taskText) return;

    let score = 0;

    if (taskText.toLowerCase().includes(searchQuery)) {
      score = 1000;
    } else {
      score = fuzzyScore(searchQuery, taskText);
    }

    if (score > 0) {
      searchResults.push({
        type: "task",
        text: taskText,
        element: task as HTMLElement,
        score,
      });
    }
  });

  document.querySelectorAll(".listNote").forEach((note) => {
    const noteText =
      (note.querySelector(".mainNoteText") as HTMLElement).dataset.originalNoteText;
    if (!noteText) return;

    let score = 0;

    if (noteText.toLowerCase().includes(searchQuery)) {
      score = 1000;
    } else {
      score = fuzzyScore(searchQuery, noteText);
    }

    if (score > 0) {
      searchResults.push({
        type: "note",
        text: noteText,
        element: note as HTMLElement,
        score,
      });
    }
  });

  if (searchResults.length === 0) {
    searchResultsMenu.style.display = "none";
    return;
  }

  searchResults.sort((a, b) => b.score - a.score);
  selectedIndex = Math.min(selectedIndex, searchResults.length - 1);
  if (selectedIndex < 0) selectedIndex = 0;

  if (searchResultsMenu) searchResultsMenu.style.display = "block";

  searchResults.slice(0, 6).forEach((result) => {
    const searchResult = document.createElement("li");
    searchResult.className = "searchResult";

    const searchResultIcon = document.createElement("img");
    searchResultIcon.className = `searchResultIcon searchResultIcon--${result.type}`;

    if (result.type === "task") {
      searchResultIcon.src = "Images/Checkmark.png";
      searchResultIcon.alt = "Task Icon";
    } else if (result.type === "note") {
      searchResultIcon.src = "Images/Note-Icon.png";
      searchResultIcon.alt = "Note Icon";
    } else {
      searchResultIcon.src = "";
      searchResultIcon.alt = "";
    }

    const searchResultText = document.createElement("span");
    searchResultText.className = "searchResultText";
    searchResultText.innerHTML = highlightMatch(result.text, searchQuery);

    searchResult.appendChild(searchResultIcon);
    searchResult.appendChild(searchResultText);

    searchResult.addEventListener("click", () => {
      result.element.scrollIntoView({ behavior: "smooth", block: "center" });
      searchResultsMenu.style.display = "none";
    });

    searchResultsMenu.appendChild(searchResult);
  });

  if (!searchResultsMenu) return;
  const renderedResults = searchResultsMenu.querySelectorAll<HTMLElement>(".searchResult");
  updateHighlightedResult(renderedResults);

  console.log("Search results:", searchResults);

  if (searchResultsMenu) searchResultsMenu.classList.add("show");
}

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "k") {
    event.preventDefault();
    searchBar.focus();
    searchBar.click();
  }
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".taskOptions").forEach((menu) => {
    menu.classList.remove("show");
  });

  if (!searchDiv.contains((e.target as Node))) {
    searchResultsMenu.classList.remove("show");
  }
});

document.addEventListener("keydown", handleSearchKeys);
console.log("keydown listener attached");

function debounce(func: (...args: any[]) => void, delay: number) {
  let timeout: number | undefined;

  return function (...args: any[]) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

searchBar?.addEventListener("input", debounce(searchBarMagic, 150));

searchBar?.addEventListener("focus", () => {
    selectedIndex = -1;
});

function isDark() {
  return document.documentElement.dataset.mode === "dark";
}

function getTaskUrgency(task: Task) {
  if (!task.dueDate || task.completed) return 0;

  const now = Date.now();
  const due = new Date(
    task.dueDate + (task.dueTime ? `T${task.dueTime}:00` : "T23:59:59"),
  ).getTime();

  const diff = due - now;
  if (diff <= 0) return 1;

  const hoursLeft = diff / (1000 * 60 * 60);
  if (hoursLeft <= 0) return 1;

  const urgency = Math.pow(Math.max(0, 1 - hoursLeft / 72), 2);

  return Math.min(Math.max(urgency, 0), 1);
}

function applyUrgencyStyle(el: HTMLElement | null, urgency: number) {
  if (!el) return;
  el.style.setProperty("--urgency", urgency.toFixed(3));

  const r = Math.round(45 + urgency * 210);
  const g = Math.round(58 - urgency * 38);
  const b = Math.round(200 - urgency * 160);

  el.style.setProperty("--urgency-r", String(r));
  el.style.setProperty("--urgency-g", String(g));
  el.style.setProperty("--urgency-b", String(b));

  const duration = 2.4 - urgency * 1.4;
  el.style.animationDuration = `${duration.toFixed(2)}s`;
}

customizeBtn?.addEventListener("click", () => {
  customizeDiv.classList.add("show");
  customizeDiv.classList.remove("closing");
});

const closeCustomizeBtn = document.querySelector(".closeCustomizeBtn");
closeCustomizeBtn?.addEventListener("click", () => {
  customizeDiv.classList.add("closing");
  setTimeout(() => {
    customizeDiv.classList.remove("show", "closing");
  }, 300);
});

const themes = [
  {
    name: "red",
    light: "linear-gradient(65deg, maroon, #f8dce5)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(62, 0, 0), black 100%)",
  },
  {
    name: "gold",
    light: "linear-gradient(65deg, rgb(226, 160, 57), #fff6d6)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(79, 56, 19), black 100%)",
  },
  {
    name: "lightGreen",
    light: "linear-gradient(65deg, green, #f1fff1)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, green, black 100%)",
  },
  {
    name: "green",
    light: "linear-gradient(65deg, #2a4b2a, rgb(18, 77, 18), #e6f7e6)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(18, 77, 18), black 100%)",
  },
  {
    name: "teal",
    light: "linear-gradient(65deg, rgb(0, 110, 120), #e6f9f9)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(0, 110, 120), black 100%)",
  },
  {
    name: "aqua",
    light: "linear-gradient(65deg, #008ca2, rgb(0, 213, 255), #ecfdff)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(0, 102, 123), black 100%)",
  },
  {
    name: "blue",
    light: "linear-gradient(65deg, rgb(0, 149, 255), #eef8ff)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(0, 77, 132), black 100%)",
  },
  {
    name: "violet",
    light: "linear-gradient(65deg, rgb(198, 130, 238), #f6efff)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(105, 68, 126), black 100%)",
  },
  {
    name: "purple",
    light: "linear-gradient(65deg, rgb(142, 0, 185), #f5ebff)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(87, 0, 114), black 100%)",
  },
  {
    name: "pink",
    light: "linear-gradient(65deg, pink, #fff2f7)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, #a3627b, black 100%)",
  },
  {
    name: "white",
    light: "linear-gradient(65deg, white, #fafafa)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, #7c7c7c, black 100%)",
  },
  {
    name: "black",
    light: "linear-gradient(65deg, rgb(18, 18, 18), #f2f2f2)",
    dark: "linear-gradient(65deg, rgb(60, 60, 60) 0%, rgb(18, 18, 18) 25%, black 100%)",
  },
];

const themesMap = Object.fromEntries(themes.map((t) => [t.name, t]));

customizeBgOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const themeName = button.dataset.theme;
    applyTheme(String(themeName));
  });
});

function applyTheme(themeName: string) {
  const theme = themesMap[themeName];
  if (!theme) return;
  const darkMode = isDark();
  const bg = darkMode ? theme.dark : theme.light;
  document.body.style.background = bg;
  localStorage.setItem("customTheme", themeName);
}

function responsiveWebsite() {
  if (window.innerWidth < 768) {
    console.log("Mobile");
    if (sidebar) sidebar.style.display = "none";
    if (section1) section1.style.flexDirection = "column";
    if (section2) section2.style.flexDirection = "column";
    if (dashboardContent) dashboardContent.style.marginLeft = "0px";
  } else {
    console.log("Desktop");
    if (sidebar) sidebar.style.display = "flex";
    if (section1) section1.style.flexDirection = "row";
    if (section2) section2.style.flexDirection = "row";
    if (dashboardContent) dashboardContent.style.marginLeft = "300px";
  }
}

const sidebarHidden = localStorage.getItem("sidebarHidden") === "true";
let isSidebarVisible = !sidebarHidden;

hamburgerBtn?.addEventListener("click", () => {
  if (isSidebarVisible) {
    sidebar?.classList.add("closing");
    setTimeout(() => {
      sidebar?.classList.remove("show", "closing");
      if (sidebar?.parentNode) document.documentElement.removeChild(sidebar);
    }, 200);
    localStorage.setItem("sidebarHidden", "true");
    document.documentElement.classList.add("sidebarHidden");
    isSidebarVisible = false;
  } else {
    if (!sidebar?.parentNode) document.documentElement.appendChild(sidebar);
    sidebar.offsetHeight;
    sidebar.classList.add("show");
    sidebar.classList.remove("closing");
    localStorage.setItem("sidebarHidden", "false");
    document.documentElement.classList.remove("sidebarHidden");
    isSidebarVisible = true;
  }
});

document.addEventListener("mousemove", (e) => {
  if (isSidebarVisible) return;
  if (e.clientX <= 20) {
    if (!sidebar?.parentNode) document.documentElement.appendChild(sidebar);
    sidebar?.classList.add("show");
    sidebar?.classList.remove("closing");
  } else if (e.clientX > 250 && sidebar?.classList.contains("show") && !sidebar?.classList.contains("closing")) {
    sidebar?.classList.add("closing");
    setTimeout(() => {
      if (!isSidebarVisible && sidebar?.parentNode) {
        sidebar?.classList.remove("show", "closing");
        document.documentElement.removeChild(sidebar);
      }
    }, 200);
  }
});

/* window.addEventListener("resize", responsiveWebsite);
responsiveWebsite(); */

document.addEventListener("DOMContentLoaded", () => {
  if (taskCreationDiv) taskCreationDiv.style.display = "none";

  syncRecurringTasks(new Date());

  toggleAI();

  updateTasksOverdueCount();
  updateTasksDueTodayCount();

  if (localStorage.getItem("miniAnalyticsExpanded") === "true" && miniAnalytics) miniAnalytics.classList.add("show");

  currentTaskSort = taskSortSelector?.value || "dateCreated";
  setTaskView(localStorage.getItem("taskViewOption") || "listView", false);

  if (searchBar) searchBar.value = "";

  if (taskPrioritySelector) taskPrioritySelector.value = "None";
  if (taskDateInput) taskDateInput.value = "";
  if (taskTimeInput) taskTimeInput.value = "";
  if (taskStatusSelector) taskStatusSelector.value = "To Do";
  if (blockedByInput) blockedByInput.value = "disabled";
  if (blockedByDiv) blockedByDiv.style.display = "none";

  refreshTaskDropdown();

  const personalSettingsOption = document.querySelector(
    ".settingsNavList a[href='#personal']",
  );
  personalSettingsOption?.classList.add("active");

  if (noteInput) noteInput.value = "";

  const savedNotes = safeParse("notes");
  savedNotes.forEach((note) => {
    createNoteElement(note);
  });

  const savedAskForNotiDisplay = localStorage.getItem("askForNotiDisplay");
  if (savedAskForNotiDisplay) {
    if (askForNotifications) askForNotifications.remove();
    if (sidebar) sidebar.style.marginTop = "0px";
    if (toDoList) toDoList.style.marginTop = "0px";
  } else {
    if (askForNotifications) document.body.appendChild(askForNotifications);
    if (sidebar) sidebar.style.marginTop = "0px";
    if (toDoList) toDoList.style.marginTop = "0px";
  }

  const sidebarHidden = localStorage.getItem("sidebarHidden") === "true";
  let isSidebarVisible = !sidebarHidden;
  if (sidebarHidden) {
    document.documentElement.classList.add("sidebarHidden");
    sidebar?.classList.remove("show");
    if (sidebar?.parentNode) sidebar?.remove();
  } else {
    document.documentElement.classList.remove("sidebarHidden");
    if (!sidebar?.parentNode) document.body.appendChild(sidebar);
    sidebar?.classList.add("show");
  }

  loadActivities();

  const calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "",
        center: "prev,title,next",
        right: "dayGridMonth,dayGridWeek,dayGridDay",
      },
      datesSet() {
        renderCalendarEvents();
      },
      eventDidMount(info: EventMountArg) {
        const taskId = info.event.extendedProps?.taskId || info.event.id;
        const taskMap = new Map(tasks.map((t) => [String(t.id), t]));
        const task = taskMap.get(String(taskId));
        if (!task) return;

        const urgency = getTaskUrgency(task);
        applyUrgencyStyle(info.el.closest(".fc-event") || info.el, urgency);
      },
      dateClick: function (info: DateClickArg) {
        if (!taskCreationDiv) return;
        taskCreationDiv.style.display = "flex";
        taskCreationDiv.style.position = "fixed";
        taskCreationDiv.style.zIndex = "9999";
        taskCreationDiv.style.top = "50%";
        taskCreationDiv.style.left = "50%";
        taskCreationDiv.style.transform = "translate(-50%, -50%)";

        showOverlay();

        taskDateInput.value = info.dateStr;

        document.body.appendChild(taskCreationDiv);

        (document
          .querySelector(".cancelTaskCreationBtn") as HTMLButtonElement)
          .addEventListener("click", () => {
            if (!taskCreationDiv) return;
            taskCreationDiv.style.display = "none";
            taskCreationDiv.style.position = "relative";
            taskCreationDiv.style.zIndex = "0";
            taskCreationDiv.style.top = "0px";
            taskCreationDiv.style.left = "0px";
            taskCreationDiv.style.transform = "none";

            hideOverlay();

            if (taskInput) taskInput.value = "";
             if (taskDateInput) taskDateInput.value = "";

            if (toDoList && toDoListHeader) toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
          });

        (document.querySelector(".addTaskBtn") as HTMLButtonElement).addEventListener("click", () => {
          addTask();

          if (!taskCreationDiv || !addTaskBtn || !taskInput || !taskDateInput || !toDoList || !toDoListHeader) return;
          taskCreationDiv.style.display = "none";
          taskCreationDiv.style.position = "relative";
          taskCreationDiv.style.top = "0px";
          taskCreationDiv.style.left = "0px";
          taskCreationDiv.style.transform = "none";
          taskCreationDiv.style.order = "0";

          addTaskBtn.textContent = "Add Task";
          addTaskBtn.style.padding = "0px 10px";

          hideOverlay();

          if (taskInput) taskInput.value = "";
          if (taskDateInput) taskDateInput.value = "";

          toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
        });
      },
    });
    if (calendar) calendar.render();
  } else {
    console.error("Calendar error");
  }

  renderCalendarEvents();
});

function renderCalendarEvents() {
  if (!calendar) return;

  calendar.getEvents().forEach((event) => event.remove());

  const { startDate, endDate } = getCalendarRange();

  tasks.forEach((task) => {
    if (!task.dueDate) return;

    const dates =
      task.recurrence !== "none"
        ? getOccurrences(task, startDate, endDate)
        : [getTaskOccurrenceStart(task)];

    dates.filter(Boolean).forEach((date) => {
      addTaskToCalendar(task, date);
    });
  });
}

taskStatusSelector?.addEventListener("change", () => {
  const blockedTask = taskStatusSelector.value === "Blocked";
  
  if (blockedByDiv) blockedByDiv.style.display = blockedTask ? "block" : "none";

  if (blockedTask) {
    if (blockedByInput) blockedByInput.innerHTML = "";

    tasks.forEach((task) => {
      if (!task.completed && task.id !== editingTaskId) {
        const option = document.createElement("option");
        option.value = task.id;
        option.textContent = task.title;
        blockedByInput.appendChild(option);
      }
    });
  };
});

function saveEditedTask() {
  const task = tasks.find((t) => String(t.id) === String(editingTaskId));
  if (!task) return;

  if (taskInput) task.title = taskInput.value.trim();
  if (taskPrioritySelector) task.priority = taskPrioritySelector.value;
  if (taskDateInput) task.dueDate = taskDateInput.value || null;
  if (taskTimeInput) task.dueTime = taskTimeInput.value || null;
  if (taskStatusSelector) task.status = normalizeTaskStatus(taskStatusSelector.value);
  if (task.blockedByInput) task.blockedBy = task.blockedByInput.value || null;
  if (taskRecurrenceSelector) task.recurrence = task.dueDate ? taskRecurrenceSelector.value : "none";

  saveTasks();
  renderTasks(currentTaskSort);
  renderCalendarEvents();
  refreshTaskDropdown();
  editingTaskId = null;
  isEditing = false;
  if (taskCreationDiv) taskCreationDiv.style.display = "none";
  document.body.removeChild(taskCreationDiv);
  hideOverlay();
}

function createSubtask() {
  return {
    id: crypto.randomUUID(),
    title: taskInput?.value.trim(),
    completed: false,
    priority: taskPrioritySelector?.value,
    dueDate: taskDateInput?.value || null,
    dueTime: taskTimeInput?.value || null,
    status: taskStatusSelector?.value,
    recurrence: taskRecurrenceSelector?.value,
    createdAt: Date.now(),
  };
}

function addSubtask(parentTaskId: string) {
  const parentTask = tasks.find((t) => String(t.id) === String(parentTaskId));
  if (!parentTask) return;

  if (!parentTask.subtasks) parentTask.subtasks = [];

  const subtask = createSubtask();
  parentTask.subtasks.push(subtask);
  saveTasks();

  if (!taskCreationDiv) return;
  taskCreationDiv.style.display = "none";
  taskCreationDiv.style.position = "relative";
  taskCreationDiv.style.top = "0px";
  taskCreationDiv.style.left = "0px";
  taskCreationDiv.style.transform = "none";
  taskCreationDiv.style.order = "0";
  taskCreationDiv.style.zIndex = "0";

  hideOverlay();
  toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
  renderTasks(currentTaskSort);
}

function createSubtaskElement(subtask: Task) {
  const subtaskEl = document.createElement("li");
  subtaskEl.className = "subtask";

  const subtaskCheckbox = document.createElement("input");
  subtaskCheckbox.type = "checkbox";
  subtaskCheckbox.className = "subtaskCheckbox";
  subtaskCheckbox.checked = subtask.completed;

  const subtaskTitle = document.createElement("span");
  subtaskTitle.textContent = subtask.title;

  const subtaskDate = document.createElement("span");
  subtaskDate.className = "subtaskDate";
  if (subtask.dueDate) {
    const dueDate = new Date(subtask.dueDate);
    const options = { month: "short", day: "numeric" } as const;
    subtaskDate.textContent = dueDate.toLocaleDateString("en-US", options);
  }

  const subtaskTime = document.createElement("span");
  subtaskTime.className = "subtaskTime";
  if (subtask.dueTime) {
    const [hour, minute] = subtask.dueTime.split(":");
    const date = new Date();
    date.setHours(Number(hour), Number(minute));
    const options = { hour: "numeric", minute: "numeric" } as const;
    subtaskTime.textContent = date.toLocaleTimeString("en-US", options);
  }

  subtaskCheckbox.addEventListener("change", () => {
    subtask.completed = subtaskCheckbox.checked;
    saveTasks();
    renderTasks(currentTaskSort);
  });

  subtaskEl.append(subtaskCheckbox, subtaskTitle);

  return subtaskEl;
}

sidebarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebarBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

dashboardBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("dashboardActive");
  document.documentElement.classList.remove("isSettingsView");
  document.documentElement.classList.remove("calendarView");
});

calendarBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("calendarView");
  document.documentElement.classList.remove("dashboardActive");
  document.documentElement.classList.remove("isSettingsView");
});

settingsBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("isSettingsView");
  document.documentElement.classList.remove("dashboardActive");
  document.documentElement.classList.remove("calendarView");

  preferredNameInput.value = localStorage.getItem("preferredName") || "";
  fullNameInput.value = localStorage.getItem("fullName") || "";
});

const settingsSections = document.querySelectorAll<HTMLDivElement>(".actualSettings > div");

settingsNavOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();

    settingsNavOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    settingsSections.forEach((section) => {
      section.style.display = "none";
    });

    const target = option.getAttribute("href")?.substring(1);
    if (target) (document.querySelector(`.${target}Section`) as HTMLDivElement).style.display = "flex";
  });
});

function setupDate() {
  const now = new Date();
  currentDate.textContent = now.toLocaleDateString("en-US", {
    dateStyle: "full",
  });
}

function getGreeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour >= 12 && hour <= 17) return "Good afternoon";
  return "Good evening";
}

function setupGreeting() {
  const preferredName =
    localStorage.getItem("preferredName") ||
    preferredNameInput.value.trim() ||
    "";
  const fullName =
    localStorage.getItem("fullName") || fullNameInput.value.trim() || "";

  const hour = new Date().getHours();
  const greeting = getGreeting(hour);

  const name = preferredName || fullName;

  dynamicGreeting.textContent = name ? `${greeting}, ${name}` : greeting;
}

fullNameInput?.addEventListener("input", () => {
  localStorage.setItem("fullName", fullNameInput.value.trim());
  setupGreeting();
});

preferredNameInput?.addEventListener("input", () => {
  localStorage.setItem("preferredName", preferredNameInput.value.trim());
  setupGreeting();
});

setupDate();
setupGreeting();

enableNotificationsBtn?.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      askForNotifications.style.display = "none";
      localStorage.setItem("askForNotiDisplay", "none");
    } else {
      askForNotifications.style.display = "inline";
      localStorage.setItem("askForNotiDisplay", "visible");
    }
  });
});

closeNotiPopup?.addEventListener("click", () => {
  askForNotifications.remove();
  localStorage.setItem("askForNotiDisplay", "none");

  const notiReminderDiv = document.createElement("div");
  notiReminderDiv.className = "notiReminderDiv";

  const notiReminderText = document.createElement("div");
  notiReminderText.className = "notiReminderText";
  notiReminderText.textContent =
    "You can always setup notifications in settings.";
  notiReminderDiv.appendChild(notiReminderText);

  notiReminderDiv.classList.add("show");
  document.body.appendChild(notiReminderDiv);
  setTimeout(() => {
    if (notiReminderDiv.parentNode) {
      notiReminderDiv.parentNode.removeChild(notiReminderDiv);
    }
  }, 4000);
});

const savedMode = localStorage.getItem("mode");
if (savedMode) {
  document.documentElement.dataset.mode = savedMode;
}

themeBtn?.addEventListener("click", () => {
  const currentMode = document.documentElement.dataset.mode;
  const newMode = currentMode === "dark" ? "light" : "dark";
  document.documentElement.dataset.mode = newMode;
  localStorage.setItem("mode", newMode);

  const savedTheme = localStorage.getItem("customTheme");
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  if (newMode === "dark") {
    themeBtn.innerHTML = `<img src="Images/Light-Mode-Icon.png" alt="Light Mode Icon" class="themeIcon">`;
  } else {
    themeBtn.innerHTML = `<img src="Images/Dark-Mode-Icon.png" alt="Dark Mode Icon" class="themeIcon">`;
  }
});

agentBtn?.addEventListener("click", () => {
  if (aiOptionsDiv) aiOptionsDiv.classList.toggle("show");
});

prioritySuggestionOption?.addEventListener("click", () => {
  const isaiView = document.documentElement.classList.toggle("aiView");

  if (isaiView) {
    const aiName = document.querySelector(".aiName");

    let aiPrioritySuggestionBtn = document.querySelector(
      ".aiPrioritySuggestionBtn",
    );
    if (!aiPrioritySuggestionBtn) {
      aiPrioritySuggestionBtn = document.createElement("button");
      aiPrioritySuggestionBtn.className = "aiPrioritySuggestionBtn";
      aiPrioritySuggestionBtn.textContent = "Get Priority Suggestions";
    }

    let aiPrioritySuggestions = document.querySelector(
      ".aiPrioritySuggestions",
    );
    if (!aiPrioritySuggestions) {
      aiPrioritySuggestions = document.createElement("div");
      aiPrioritySuggestions.className = "aiPrioritySuggestions";
    }

    if (aiDiv) aiDiv.classList.add("show");

    aiPrioritySuggestionBtn.addEventListener("click", async () => {
      aiPrioritySuggestions.textContent = "Thinking...";

      const data = await getSuggestedPriorities();
      if (data.error) {
        aiPrioritySuggestions.textContent =
          "ai is busy right now. Try again in a moment.";
        return;
      } else {
        console.log(data.priorities);
      }

      const result = data;

      aiPrioritySuggestions.innerHTML = "";
      result.priorities.forEach((item: { title: string; reason: string }, index: number) => {
        const entry = document.createElement("div");
        entry.className = "aiResultEntry";
        entry.innerHTML = `<strong>${index + 1}. ${item.title}</strong><p>${item.reason}</p>`;
        console.log(result);
        aiPrioritySuggestions.appendChild(entry);
      });
    });

    aiDiv?.append(aiPrioritySuggestionBtn, aiPrioritySuggestions);
    document.body.appendChild(aiDiv);
    showOverlay();
    document
      .querySelectorAll("body > :not(.aiDiv):not(.overlay)")
      .forEach((el) => ((el as HTMLElement).inert = true));
  } else {
    hideOverlay();
    document.querySelector(".aiDiv")?.remove();
    document.querySelectorAll("body >  *").forEach((el) => ((el as HTMLElement).inert = false));
  }
});

decrastinatorBtn?.addEventListener("click", () => {
  const isDecrastinatorView =
    document.documentElement.classList.toggle("decrastinatorView");

  if (isDecrastinatorView) {
    const decrastinatorDiv = document.querySelector<HTMLDivElement>(".decrastinatorDiv");
    if (!decrastinatorDiv) return;

    const decrastinatorMinutesDiv = decrastinatorDiv.querySelector(".decrastinatorMinutesDiv");
    const decrastinatorTaskSelector = decrastinatorDiv.querySelector(".decrastinatorTaskSelector");
    const startDecrastinatorBtn = decrastinatorDiv.querySelector(".startDecrastinatorBtn");

    decrastinatorDiv.hidden = false;
    decrastinatorDiv.style.display = "flex";

    let decrastinatorTotalTime = 3 * 60;
    let decrastinatorTotalSeconds = decrastinatorTotalTime;

    const decrastinatorInitMinutes = Math.floor(decrastinatorTotalSeconds / 60);
    const decrastinatorInitSeconds = decrastinatorTotalSeconds % 60;
    if (decrastinatorMinutesDiv) decrastinatorMinutesDiv.textContent = `${decrastinatorInitMinutes}:${decrastinatorInitSeconds.toString().padStart(2, "0")}`;
    if (decrastinatorTaskSelector) decrastinatorTaskSelector.innerHTML = "";

    const decrastinatorTaskSelectorPlaceholder =
      document.createElement("option");
    decrastinatorTaskSelectorPlaceholder.className =
      "decrastinatorTaskSelectorPlaceholder";
    decrastinatorTaskSelectorPlaceholder.textContent = "Select a task";
    decrastinatorTaskSelectorPlaceholder.disabled = true;
    decrastinatorTaskSelectorPlaceholder.selected = true;

    if (decrastinatorTaskSelector) {
      decrastinatorTaskSelector.appendChild(decrastinatorTaskSelectorPlaceholder);
    }

    tasks.forEach((task) => {
      if (!task.completed) {
        const decrastinationTaskOption = document.createElement("option");
        decrastinationTaskOption.value = task.id;
        decrastinationTaskOption.textContent = task.title;
        if (decrastinatorTaskSelector) decrastinatorTaskSelector.appendChild(decrastinationTaskOption);
      }
    });

    (startDecrastinatorBtn as HTMLButtonElement).onclick = () => {
      if (decrastinatorIsRunning) return;
      decrastinatorIsRunning = true;

      const selectedTaskId = (decrastinatorTaskSelector as HTMLSelectElement).value;

      if (!selectedTaskId) return;

      const task = tasks.find((t) => String(t.id) === String(selectedTaskId));
      if (!task) return;

      if (task) {
        currentFocusedTask.textContent = task.title;
      }

      decrastinatorIntervalId = setInterval(() => {
        decrastinatorTotalSeconds--;

        const decrastinatorMinutes = Math.floor(decrastinatorTotalSeconds / 60);
        const decrastinatorSeconds = decrastinatorTotalSeconds % 60;
        (decrastinatorMinutesDiv as HTMLDivElement).textContent = `${decrastinatorMinutes}:${decrastinatorSeconds.toString().padStart(2, "0")}`;

        if (decrastinatorTotalSeconds <= 0) clearInterval(Number(decrastinatorIntervalId));
      }, 1000);
    };

    showOverlay();
    document
      .querySelectorAll("body > :not(.decrastinatorDiv):not(.overlay)")
      .forEach((el) => ((el as HTMLElement).inert = true));
  } else {
    hideOverlay();
    const decrastinatorDiv = document.querySelector<HTMLDivElement>(".decrastinatorDiv");
    if (decrastinatorDiv) {
      decrastinatorDiv.hidden = true;
    }
    (document.querySelectorAll("body >  *") as NodeListOf<HTMLElement>).forEach((el) => ((el as HTMLElement).inert = false));
    clearInterval(Number(decrastinatorIntervalId));
    decrastinatorIsRunning = false;
  }
});

closeDecrastinatorBtn?.addEventListener("click", () => {
  document.documentElement.classList.remove("decrastinatorView");
  const decrastinatorDiv = document.querySelector<HTMLDivElement>(".decrastinatorDiv");
  if (decrastinatorDiv) {
    decrastinatorDiv.hidden = true;
    decrastinatorDiv.style.display = "none";
  }
  hideOverlay();
  if (themeBtn) themeBtn.innerHTML = `<img src="Images/Dark-Mode-Icon.png" alt="Dark Mode Icon" class="themeIcon">`;
  document.querySelectorAll("body >  *").forEach((el) => ((el as HTMLElement).inert = false));
  clearInterval(Number(decrastinatorIntervalId));
  decrastinatorIsRunning = false;
});

window.addEventListener("load", () => {
  if (isDark() && themeBtn) {
    themeBtn.innerHTML = `<img src="Images/Light-Mode-Icon.png" alt="Light Mode Icon" class="themeIcon">`;
  } else {
    if (themeBtn) themeBtn.innerHTML = `<img src="Images/Dark-Mode-Icon.png" alt="Dark Mode Icon" class="themeIcon">`;
  }
});

const savedTheme = localStorage.getItem("customTheme");
if (savedTheme) {
  applyTheme(savedTheme);
}

if (noTasksYetAlert && noNotesYetAlert) {
  noTasksYetAlert.style.display = "inline";
  noNotesYetAlert.style.display = "inline";
}

function normalizeTaskStatus(status: string | null): string {
  if (!status) return "to-do";
  const normalized = status.toLowerCase().replace(/\s/g, "-");

  if (normalized === "todo") return "to-do";
  if (normalized === "in-progress") return "in-progress";
  if (normalized === "done") return "done";

  return normalized;
}

taskViewSelector?.addEventListener("change", () => {
  setTaskView(taskViewSelector.value);
});

let currentDraggedTask = null;

[toDoDropZone, inProgressDropZone, allDoneDropZone].forEach((zone) => {
  zone?.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone?.classList.add("drag-over-active");
  });

  zone?.addEventListener("dragleave", () => {
    zone?.classList.remove("drag-over-active");
  });

  zone?.addEventListener("drop", (e) => {
    e.preventDefault();
    zone?.classList.remove("drag-over-active");

    const taskId = e.dataTransfer?.getData("text/plain");
    if (!taskId) return;

    const draggedTaskCard = document.querySelector(`[data-id="${taskId}"]`);
    if (!draggedTaskCard) return;

    const draggedTask = draggedTaskCard.closest(".listTask") as HTMLElement;
    if (!draggedTask) return;

    const task = tasks.find((t) => String(t.id) === String(taskId));
    if (!task) return;

    const newStatus = normalizeTaskStatusLabel(zone.dataset.status ?? "");
    task.status = newStatus;

    draggedTask.dataset.status = normalizeTaskStatus(newStatus);
    draggedTask.classList.toggle("completed", newStatus === "Done");
    if (zone) zone.appendChild(draggedTask);

    saveTasks();
  });
});

addBtn?.addEventListener("click", () => {
  if (taskCreationDiv) taskCreationDiv.style.display = "flex";
  if (taskInput) taskInput.value = "";
  if (taskPrioritySelector) taskPrioritySelector.value = "None";
  if (taskDateInput) taskDateInput.value = "";
  if (taskTimeInput) taskTimeInput.value = "";
  if (taskStatusSelector) taskStatusSelector.value = "To Do";
  if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";
  if (toDoList) toDoList.style.height = "495px";
  if (focusTimer) focusTimer.style.height = "496.5px";
});

cancelTaskCreationBtn?.addEventListener("click", () => {
  if (taskCreationDiv) taskCreationDiv.style.display = "none";
  if (toDoList) toDoList.style.height = "328.5px";
  if (focusTimer) focusTimer.style.height = "330px";
  if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";
});

addTaskBtn?.addEventListener("click", () => {
  if (currentParentTaskId) {
    addSubtask(String(currentParentTaskId));
    currentParentTaskId = null;
  } else if (editingTaskId) {
    saveEditedTask();
  } else {
    addTask();
  }
  showNoTasksYet();
  renderWhatToFocusOn();
});

function showNoTasksYet() {
  if (noTasksYetAlert) noTasksYetAlert.style.display = tasks.length === 0 ? "inline" : "none";
}

function showNoNotesYet() {
  if (notesList?.children.length === 0 && noNotesYetAlert) {
    noNotesYetAlert.style.display = "inline";
  } else {
    if (noNotesYetAlert) noNotesYetAlert.style.display = "none";
  }
}

function updateTasksOverdueCount() {
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  const overdueTasks = tasks.filter((t) => {
    if (!t.dueDate) return false;

    const currentOccurrence = getCurrentOccurrence(t, now);
    if (!currentOccurrence) return false;

    const dueDate = formatDateInputValue(currentOccurrence);
    if (today) return dueDate < today && !t.completed;
    return false;
  }).length;

  const overdueDisplay = document.querySelector(".numberOfTasksOverdue");
  if (!overdueDisplay) return;
  overdueDisplay.textContent = 
    `${overdueTasks} task${overdueTasks === 1 ? "" : "s"} overdue`;
}

function updateTasksDueTodayCount() {
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  const dueTodayTasks = tasks.filter((t) => {
    if (!t.dueDate) return false;

    const currentOccurrence = getCurrentOccurrence(t, now);
    if (!currentOccurrence) return false;

    const dueDate = formatDateInputValue(currentOccurrence);
    return dueDate === today && !t.completed;
  }).length;

  const dueTodayDisplay = document.querySelector(".numberOfTasksDueToday");
  if (!dueTodayDisplay) return;
  dueTodayDisplay.textContent = 
    `${dueTodayTasks} task${dueTodayTasks === 1 ? "" : "s"} due today`;
}

function updateTasksDoneCount() {
  const doneTasks = tasks.filter((t) => t.completed).length;

  const doneDisplay = document.querySelector(".numberOfTasksDone");
  if (doneDisplay) doneDisplay.textContent = ` ${doneTasks} tasks done`;
}

function checkTaskDue(listTask: HTMLElement, taskText: string, task: Task) {
  const checkbox = listTask.querySelector(".taskCheckbox");
  if (Notification.permission !== "granted" || task.completed) return;

  const now = new Date();
  const today = now.toISOString().split("T")[0];

  if (!listTask) return;
  const currentOccurrence = getCurrentOccurrence(task, now);
  if (!currentOccurrence) return;

  const dueDate = formatDateInputValue(currentOccurrence);
  const dueTime = listTask.dataset.dueTime || task.dueTime;
  if (dueDate === today && listTask.dataset.dateNotified !== "true") {
    new Notification("Task Due Today", {
      body: `Your task "${taskText}" is due today.`,
    });
    listTask.dataset.dateNotified = "true";
  }

  if (
    dueDate === today &&
    dueTime &&
    listTask.dataset.timeNotified !== "true"
  ) {
    const [hour, minute] = dueTime.split(":").map(Number);

    const due = new Date(now);
    due.setHours(Number(hour), Number(minute), 0, 0);
    if (now >= due) {
      new Notification("Task Due Now", {
        body: `Your task "${taskText}" is due now.`,
      });
      listTask.dataset.timeNotified = "true";
    }
  }
}

function toggleAI() {
  const isChecked = aiToggle?.checked;
  localStorage.setItem("aiEnabled", String(isChecked));
  if (agentBtn) agentBtn.style.display = isChecked ? "flex" : "none";
}

function loadAIState() {
  const aiEnabled = localStorage.getItem("aiEnabled") === "true";
  if (aiToggle) aiToggle.checked = aiEnabled;
  if (agentBtn) agentBtn.style.display = aiEnabled ? "flex" : "none";
}

aiToggle?.addEventListener("change", toggleAI);
loadAIState();

function loadActivities() {
  if (activityList) activityList.innerHTML = "";

  if (activityLog.length === 0 && activityList) {
    activityList.innerHTML = "<li class='activityItem'>No activities yet</li>";
    return;
  }

  activityLog.forEach(renderActivity);
}

function getActivityLog() {
  return safeParse("activityLog");
}

function getTimeAgo(timestamp: number) {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

function getActivityIcon(type: string) {
  const activityIcons = {
    task: "Images/Checkmark.png",
    note: "Images/Note-Icon.png",
    focus: "Images/Clock.png",
    delete: "Images/Delete-Icon.png",
  };
  const normalizedActivityType = type?.toLowerCase().trim();
  if (normalizedActivityType && normalizedActivityType in activityIcons) return activityIcons[(normalizedActivityType as keyof typeof activityIcons)] || "";
  return "";
}

function renderActivity(activity: Activity) {
  const activityItem = document.createElement("li");
  activityItem.className = `activityItem activityItem--${activity.type}`;

  const activityIcon = document.createElement("img");
  activityIcon.className = `activityIcon activityIcon--${activity.type}`;
  activityIcon.src = getActivityIcon(activity.type);
  activityIcon.alt = activity.type;
  activityIcon.onerror = () => {
    activityIcon.style.display = "none";
  };

  const activityMainContent = document.createElement("div");
  activityMainContent.className = "activityMainContent";

  const activityMessage = document.createElement("div");
  activityMessage.className = "activityMessage";
  activityMessage.textContent = activity.message;

  const activityTime = document.createElement("div");
  activityTime.className = "activityTime";
  activityTime.textContent = getTimeAgo(activity.timestamp);

  activityItem.appendChild(activityIcon);
  activityMainContent.appendChild(activityMessage);
  activityMainContent.appendChild(activityTime);
  activityItem.appendChild(activityMainContent);
  if (activityList) activityList.appendChild(activityItem);
}

function addActivity(message: string, type = "info") {
  if (!message) return;

  const activity = {
    id: crypto.randomUUID(),
    message,
    type,
    timestamp: Date.now(),
  };

  if (activityLog.length > 50) {
    activityLog.pop();
  }

  activityLog.unshift(activity);
  localStorage.setItem("activityLog", JSON.stringify(activityLog));
  loadActivities();
}

function refreshTaskDropdown() {
  if (taskSelectionDropdown) taskSelectionDropdown.innerHTML = `<option value="" disabled selected>Choose a task to focus on...</option>`;

  tasks.forEach((task) => {
    if (!task.completed) {
      const option = document.createElement("option");
      option.value = task.id;
      option.textContent = task.title;
      if (taskSelectionDropdown) taskSelectionDropdown.appendChild(option);
    }
  });
}

function renderNotes() {
  if (!notesList) return;
  notesList.innerHTML = "";
  allNotes.forEach(createNoteElement);
}

setInterval(() => {
  syncRecurringTasks();
  tasks.forEach((task) => {
    const listTask = document.getElementById(task.id);
    if (!listTask) return;

    const taskText = task.title;
    checkTaskDue(listTask, taskText, task);
  });
}, 60000);

const circumference = 283;
let totalTime = 25 * 60;
let totalSeconds = totalTime;
let intervalId: number | null = null;
let isRunning = false;

if (pauseTimerBtn) pauseTimerBtn.style.display = "none";

function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (timerMinutes) timerMinutes.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function updateRing(timeLeft: number) {
  const fraction = timeLeft / totalTime;
  const offset = circumference - fraction * circumference;
  if (timerProgressRing) timerProgressRing.style.strokeDashoffset = String(offset);
}

lengthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const minutes = parseInt(button.textContent);
    totalTime = minutes * 60;
    restartTimer();
  });
});

timerOptionsDropdown?.addEventListener("change", () => {
  timerMode = timerOptionsDropdown.value;
  if (timerMode === "focus") {
    totalTime = 25 * 60;
  } else {
    totalTime = 10 * 60;
  }

  restartTimer();
});

function enterFocusMode() {
  if (!taskSelectionDropdown?.value) return;
  focusMode = true;
  const selectedOption = taskSelectionDropdown.options[taskSelectionDropdown.selectedIndex];
  if (!selectedOption) return;
  activeFocusTask = selectedOption.text;
  startTimer();
}

function startTimer() {
  if (isRunning) return;

  if (timerMode === "focus") {
    if (!taskSelectionDropdown?.value && !focusMode) return;
    const selectedFocusedTask = focusMode
      ? activeFocusTask
      : (taskSelectionDropdown?.selectedOptions?.[0]?.textContent as string) || "Unknown task";
    if (currentFocusedTask) {
      currentFocusedTask.textContent = "Focusing on: " + selectedFocusedTask;
      currentFocusedTask.style.display = "inline";
      currentFocusedTask.dataset.order = "2";
    }
    addActivity(`Started focus session: ${selectedFocusedTask}`, "focus");

    const currentFocusedTaskDiv = document.querySelector<HTMLDivElement>(".currentFocusedTaskDiv");
    if (currentFocusedTaskDiv && taskSelectionDropdown) {
      currentFocusedTaskDiv.style.gap = "5px";
      currentFocusedTaskDiv.style.display = "flex";
      taskSelectionDropdown.style.display = "none";
    }
  } else {
    if (currentFocusedTask) {
      currentFocusedTask.textContent = "Taking a break";
      currentFocusedTask.style.display = "inline";
    }
  }

  if (timerButtons) timerButtons.style.marginTop = "15px";

  isRunning = true;
  if (startTimerBtn) startTimerBtn.style.display = "none";
  if (pauseTimerBtn) pauseTimerBtn.style.display = "flex";

  const endTime = Date.now() + totalSeconds * 1000;

  intervalId = setInterval(() => {
    const remaining = Math.max(0, Math.round((endTime - Date.now()) / 1000));
    totalSeconds = remaining;
    updateTimerDisplay();
    updateRing(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(intervalId as number);
      intervalId = null;
      isRunning = false;
      if (typeof Notification !== "undefined" && Notification.permission === "granted") {
        new Notification(
          timerMode === "focus"
            ? "Focus session finished! Take a break."
            : "Break timer finished! Ready to focus."
        );
      }
      const currentFocusedTaskDiv = document.querySelector<HTMLDivElement>(".currentFocusedTaskDiv");
      if (currentFocusedTaskDiv) currentFocusedTaskDiv.style.display = "none";
      restartTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId as number);
  isRunning = false;
  if (startTimerBtn) startTimerBtn.style.display = "flex";
  if (pauseTimerBtn) pauseTimerBtn.style.display = "none";
}

function restartTimer() {
  clearInterval(intervalId as number);
  isRunning = false;
  focusMode = false;
  activeFocusTask = undefined;
  totalSeconds = totalTime;
  updateTimerDisplay();
  updateRing(totalTime);
  if (startTimerBtn) startTimerBtn.style.display = "flex";
  if (pauseTimerBtn) pauseTimerBtn.style.display = "none";
  if (!focusMode) {
    if (currentFocusedTask) currentFocusedTask.style.display = "none";
  }
  focusMode = false;
  activeFocusTask = undefined;

  if (timerMode === "focus") {
    if (taskSelectionDropdown) taskSelectionDropdown.style.display = "block";
    if (currentFocusedTask) currentFocusedTask.style.display = "none";
    if (timerButtons) timerButtons.style.marginTop = "0px";
  } else {
    if (taskSelectionDropdown) taskSelectionDropdown.style.display = "none";
    if (currentFocusedTask) currentFocusedTask.style.display = "none";
    if (timerButtons) timerButtons.style.marginTop = "0px";
  }
}

startTimerBtn?.addEventListener("click", enterFocusMode);
pauseTimerBtn?.addEventListener("click", pauseTimer);
restartTimerBtn?.addEventListener("click", restartTimer);

updateTimerDisplay();

addBtn2?.addEventListener("click", () => {
  if (noteCreationDiv) noteCreationDiv.style.display = "flex";
});

let selectedNoteColor: string | null = null;

noteColorOptions.forEach((button) => {
  button.addEventListener("click", () => {
    if (button && button.dataset.color) {
      selectedNoteColor = button.dataset.color;
      if (noteInput) noteInput.style.backgroundColor = selectedNoteColor;
    }  
  });
});

cancelNoteCreationBtn?.addEventListener("click", () => {
  if (noteCreationDiv) noteCreationDiv.style.display = "none";
  if (noteInput) noteInput.style.backgroundColor = "";
  selectedNoteColor = null;
});

addNoteBtn?.addEventListener("click", () => {
  addNote();
  showNoNotesYet();
});

notesList?.addEventListener("mouseover", (e) => {
  const targetEl = e.target as HTMLElement | null;
  if (!targetEl) return;
  const closestMainNote = targetEl.closest(".mainNote");
  if (!closestMainNote) return;

  const editNoteBtn = closestMainNote.querySelector(".editNoteBtn");
  const deleteNoteBtn = closestMainNote.querySelector(".deleteNoteBtn");
  if (editNoteBtn) (editNoteBtn as HTMLButtonElement).style.display = "flex";
  if (deleteNoteBtn) (deleteNoteBtn as HTMLButtonElement).style.display = "flex";

  (closestMainNote as HTMLDivElement).style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
});

notesList?.addEventListener("mouseout", (e) => {
  const targetEl = e.target as HTMLElement | null;
  if (!targetEl) return;
  const closestMainNote = targetEl.closest(".mainNote");
  if (!closestMainNote) return;
  const editNoteBtn = closestMainNote.querySelector(".editNoteBtn");
  const deleteNoteBtn = closestMainNote.querySelector(".deleteNoteBtn");
  if (editNoteBtn) (editNoteBtn as HTMLButtonElement).style.display = "none";
  if (deleteNoteBtn) (deleteNoteBtn as HTMLButtonElement).style.display = "none";
  (closestMainNote as HTMLDivElement).style.boxShadow = "none";
});

notesList?.addEventListener("click", (e) => {
  const targetEl = e.target as HTMLElement | null;
  if (!targetEl) return;
  const closestMainNote = targetEl.closest(".mainNote");
  if (!closestMainNote) return;

  if (targetEl?.closest(".editNoteBtn")) {
    showOverlay();

    const isEditingNote =
      document.documentElement.classList.toggle("editingNote");

    if (isEditingNote) {
      const noteId = (closestMainNote
        .closest(".listNote")
        ?.id.replace("note-", "")) || null;
      const note = allNotes.find((n) => n.id === noteId);
      if (!note) return;

      editingNoteColor = note.color || null;

      const noteEditDiv = document.createElement("div");
      noteEditDiv.className = "noteEditDiv";

      const noteEditInput = document.createElement("textarea");
      noteEditInput.className = "noteEditInput";
      noteEditInput.value =
        (closestMainNote.querySelector(".mainNoteText") as HTMLDivElement)?.textContent || "";
      noteEditInput.placeholder = "Edit your note...";
      noteEditInput.style.backgroundColor = note.color || "";

      const editNoteColorOptions = (document
        .querySelector(".noteColorOptions")
        ?.cloneNode(true) ?? null) as HTMLElement | null;

      if (!editNoteColorOptions) return;

      editNoteColorOptions.style.flexDirection = "column";
      editNoteColorOptions.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          if (button && button.dataset.color) {
            editingNoteColor = button.dataset.color;
            noteEditInput.style.backgroundColor = editingNoteColor;
          }
        });
      });

      const editNoteOptions = document.createElement("div");
      editNoteOptions.className = "editNoteOptions";

      const cancelNoteEditBtn = document.createElement("button");
      cancelNoteEditBtn.className = "cancelNoteEditBtn";
      cancelNoteEditBtn.textContent = "Cancel";

      const saveNoteBtn = document.createElement("button");
      saveNoteBtn.className = "saveNoteBtn";
      saveNoteBtn.textContent = "Save";

      noteEditDiv.appendChild(noteEditInput);
      noteEditDiv.appendChild(editNoteColorOptions);
      editNoteOptions.appendChild(cancelNoteEditBtn);
      cancelNoteEditBtn.addEventListener("click", () => {
        document.documentElement.classList.remove("editingNote");
        noteEditDiv.remove();
        editingNoteColor = null;
        hideOverlay();
      });
      editNoteOptions.appendChild(saveNoteBtn);
      saveNoteBtn.addEventListener("click", () => {
        const newNoteText = noteEditInput.value.trim();
        if (!newNoteText) return;

        note.text = newNoteText;
        note.color = editingNoteColor ?? note.color;

        editingNoteColor = null;

        saveNotes();
        renderNotes();
        document.documentElement.classList.remove("editingNote");
        noteEditDiv.remove();
        hideOverlay();
      });
      noteEditDiv.appendChild(editNoteOptions);
      document.body.appendChild(noteEditDiv);
    }
  }

  if (targetEl?.closest(".deleteNoteBtn")) {
    const listNote = targetEl?.closest(".listNote");
    if (!listNote) return;
    const noteId = listNote.id.replace("note-", "");

    const noteIndex = allNotes.findIndex((n) => n.id === noteId);
    if (noteIndex !== -1) {
      allNotes.splice(noteIndex, 1);
      saveNotes();
      renderNotes();
      showNoNotesYet();
      addActivity("Deleted a note", "delete");
    }
  }
});

expandMiniAnalyticsBtn?.addEventListener("click", () => {
  if (miniAnalytics) {
    miniAnalytics.classList.toggle("show");
    localStorage.setItem(
      "miniAnalyticsExpanded",
      miniAnalytics.classList.contains("show").toString()
    );
  }
});

function getTasksAsData() {
  const items = tasks;
  return items.map((task) => ({
    title: task.title,
    dueDate: task.dueDate || null,
    dueTime: task.dueTime || null,
    priority: task.priority || null,
    status: task.status || null,
    done: task.completed || false,
  }));
}

async function getSuggestedPriorities() {
  const payload = getTasksAsData();

  const res = await fetch("http://127.0.0.1:5000/api/ai/priorities", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tasks: payload }),
  });

  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`);
  }
  return await res.json();
}

async function generateSchedule(tasks: Task[]) {
  const res = await fetch("http://127.0.0.1:5000/api/ai/schedule", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tasks,
      start_time: "07:00",
      end_time: "20:00",
    }),
  });
  return await res.json();
}
