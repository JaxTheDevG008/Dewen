const overlay = document.querySelector(".overlay");
const askForNotifications = document.querySelector(".askForNotifications");
const enableNotificationsBtn = document.querySelector(
  ".enableNotificationsBtn",
);
const closeNotiPopup = document.querySelector(".closeNotiPopup");
const sidebar = document.querySelector(".sidebar");
const sidebarBtns = document.querySelectorAll(".sidebar button");
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const whatToFocusOn = document.querySelector(".whatToFocusOn");
const focusOnList = document.querySelector(".focusOnList");
const header = document.querySelector(".header");
const searchDiv = document.querySelector(".searchDiv");
const searchBar = document.querySelector(".searchBar");
const searchResultsMenu = document.querySelector(".searchResultsMenu");
const dashboardBtn = document.querySelector(".dashboardBtn");
const calendarBtn = document.querySelector(".calendarBtn");
const settingsBtn = document.querySelector(".settingsBtn");
const dashboardContent = document.querySelector(".dashboardContent");
const dashboardHeader = document.querySelector(".dashboardHeader");
const agentBtn = document.querySelector(".agentBtn");
const aiOptionsDiv = document.querySelector(".aiOptionsDiv");
const aiOptionsList = document.querySelector(".aiOptionsList");
const prioritySuggestionOption = document.querySelector(
  ".prioritySuggestionOption",
);
const scheduleSuggestionOption = document.querySelector(
  ".scheduleSuggestionOption",
);
const riskReportOption = document.querySelector(".riskReportOption");
const aiDiv = document.querySelector(".aiDiv");
const decrastinatorBtn = document.querySelector(".decrastinatorBtn");
const closeDecrastinatorBtn = document.querySelector(".closeDecrastinatorBtn");
const customizeBtn = document.querySelector(".customizeBtn");
const customizeDiv = document.querySelector(".customizeDiv");
const customizeBgOptions = document.querySelectorAll(
  ".customizeBgOptions button",
);
const currentDate = document.querySelector(".currentDate");
const dynamicGreeting = document.querySelector(".greeting");
const expandMiniAnalyticsBtn = document.querySelector(
  ".expandMiniAnalyticsBtn",
);
const miniAnalytics = document.querySelector(".miniAnalytics");
const percentOfEnergy = document.querySelector(".percentOfEnergy");
const energyGauge = document.querySelector(".energyGauge");
const workAreaSplit = document.querySelector(".workAreaSplit");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const toDoList = document.querySelector(".toDoList");
const toDoListHeader = document.querySelector(".toDoListHeader");
const taskSortSelector = document.querySelector(".taskSortSelector");
const taskViewSelector = document.querySelector(".taskViewSelector");
const addBtn = document.querySelector(".addBtn");
const taskCreationDiv = document.querySelector(".taskCreationDiv");
const actualTaskCreation = document.querySelector(".actualTaskCreation");
const taskInput = document.querySelector(".taskInput");
const taskAttrCreation = document.querySelector(".taskAttrCreation");
const taskPrioritySelector = document.querySelector(".taskPrioritySelector");
const taskDateInput = document.querySelector(".taskDateInput");
const taskTimeInput = document.querySelector(".taskTimeInput");
const taskStatusSelector = document.querySelector(".taskStatusSelector");
const taskRecurrenceSelector = document.querySelector(
  ".taskRecurrenceSelector",
);
const addAndCancelButtons = document.querySelector(".addAndCancelButtons");
const cancelTaskCreationBtn = document.querySelector(".cancelTaskCreationBtn");
const addTaskBtn = document.querySelector(".addTaskBtn");
const taskList = document.querySelector(".taskList");
const noTasksYetAlert = document.querySelector(".noTasksYetAlert");
const dropZones = document.querySelector(".dropZones");
const toDoDropZone = document.querySelector(".toDoDropZone");
const inProgressDropZone = document.querySelector(".inProgressDropZone");
const allDoneDropZone = document.querySelector(".allDoneDropZone");
const focusTimer = document.querySelector(".focusTimer");
const taskSelectionDropdown = document.querySelector(".taskSelectionDropdown");
const currentFocusedTask = document.querySelector(".currentFocusedTask");
const timerMinutesDiv = document.querySelector(".timerMinutesDiv");
const timerProgressRing = document.querySelector(".timerProgressRing");
const timerMinutes = document.querySelector(".timerMinutes");
const timerButtons = document.querySelector(".timerButtons");
const lengthButtons = document.querySelectorAll(".timerLengthOptions button");
const startTimerBtn = document.querySelector(".startTimerBtn");
const pauseTimerBtn = document.querySelector(".pauseTimerBtn");
const restartTimerBtn = document.querySelector(".restartTimerBtn");
const themeBtn = document.querySelector(".themeBtn");
const notes = document.querySelector(".notes");
const addBtn2 = document.querySelector(".addBtn2");
const notesList = document.querySelector(".notesList");
const notesHeader = document.querySelector(".notesHeader");
const noNotesYetAlert = document.querySelector(".noNotesYetAlert");
const noteCreationDiv = document.querySelector(".noteCreationDiv");
const noteInput = document.querySelector(".noteInput");
const noteColorOptions = document.querySelectorAll(".noteColorOptions button");
const cancelNoteCreationBtn = document.querySelector(".cancelNoteCreationBtn");
const addNoteBtn = document.querySelector(".addNoteBtn");
const activityList = document.querySelector(".activityList");
const calendarSection = document.querySelector(".calendar");
const settingsContent = document.querySelector(".settingsContent");
const settingsNavigator = document.querySelector(".settingsNavigator");
const settingsNavOptions = document.querySelectorAll(".settingsNavItem");
const fullNameInput = document.querySelector(".fullNameInput");
const preferredNameInput = document.querySelector(".preferredNameInput");
const ai_API_BASE = "http://127.0.0.1:5000";

console.log({
  currentDate,
  dynamicGreeting,
  fullNameInput,
  preferredNameInput,
});

function safeParse(key) {
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
let decrastinatorIntervalId = null;
let decrastinatorIsRunning = false;
let isDraggable = false;
let editingNoteColor = null;
let activityLog = getActivityLog();
let calendar;
let editingTaskId = null;
let isEditing = false;
let isAddingSubtask = false;
let currentParentTaskId = null;
let currentTaskSort = "dueDate";
let focusMode = false;
let activeFocusTask = null;
let energyLevel = 100;

function showOverlay() {
  overlay.style.display = "block";
  overlay.onclick = null;
}

function hideOverlay() {
  overlay.style.display = "none";
  overlay.onclick = null;
}

function createTaskElement(task) {
  noTasksYetAlert.style.display = "none";

  const taskId = task.id;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.className = "taskCheckbox";
  taskCheckbox.checked = task.completed;

  const taskText = task.title;

  let taskPriority = task.priority;
  if (taskPriority === "None") {
    taskPriority = "";
  }

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
  if (task.completed) {
    listTask.classList.add("completed");
  }
  listTask.dataset.dateNotified = "false";
  listTask.dataset.timeNotified = "false";
  listTask.dataset.priority = taskPriority;
  listTask.dataset.dueDate = taskDate;
  listTask.dataset.dueTime = taskTime;
  listTask.dataset.status = normalizeTaskStatus(task.status);
  listTask.id = taskId;

  const mainTask = document.createElement("label");
  mainTask.className = "mainTask";
  mainTask.draggable = isDraggable;
  mainTask.dataset.id = taskId;
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

    e.dataTransfer.setData("text/plain", listTask.id);
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
    if (t.completed) completeTaskAndLoseEnergy(t);
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

  editOption.addEventListener("click", () => {
    editingTaskId = taskId;
    isEditing = true;

    taskInput.blur();

    taskInput.value = "";
    taskPrioritySelector.value = "None";
    taskDateInput.value = "";
    taskTimeInput.value = "";
    taskStatusSelector.value = "To Do";
    taskRecurrenceSelector.value = "none";

    const task = tasks.find((t) => String(t.id) === String(editingTaskId));

    taskOptions.classList.remove("show");

    document.body.appendChild(taskCreationDiv);

    taskCreationDiv.style.display = "flex";
    taskCreationDiv.style.position = "fixed";
    taskCreationDiv.style.zIndex = "9999";
    taskCreationDiv.style.top = "50%";
    taskCreationDiv.style.left = "50%";
    taskCreationDiv.style.transform = "translate(-50%, -50%)";

    addTaskBtn.textContent = "Save Task";
    addTaskBtn.style.padding = "0px 8px";

    showOverlay();

    if (task) {
      taskInput.value = task.title;
      taskPrioritySelector.value = task.priority || "None";
      taskDateInput.value = task.dueDate || "";
      taskTimeInput.value = task.dueTime || "";
      taskStatusSelector.value = task.status || "To Do";
      taskRecurrenceSelector.value = task.dueDate
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

    taskInput.blur();

    taskInput.value = "";
    taskPrioritySelector.value = "None";
    taskDateInput.value = "";
    taskTimeInput.value = "";
    taskStatusSelector.value = "To Do";
    taskRecurrenceSelector.value = "none";

    document.body.appendChild(taskCreationDiv);

    taskCreationDiv.style.display = "flex";
    taskCreationDiv.style.position = "fixed";
    taskCreationDiv.style.zIndex = "9999";
    taskCreationDiv.style.top = "50%";
    taskCreationDiv.style.left = "50%";
    taskCreationDiv.style.transform = "translate(-50%, -50%)";

    addTaskBtn.textContent = "Add Subtask";
    addTaskBtn.style.padding = "0px 8px";

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
  taskList.appendChild(listTask);
}

cancelTaskCreationBtn.addEventListener("click", () => {
  taskCreationDiv.style.display = "none";
  taskCreationDiv.style.position = "relative";
  taskCreationDiv.style.top = "0px";
  taskCreationDiv.style.left = "0px";
  taskCreationDiv.style.transform = "none";
  taskCreationDiv.style.order = "0";
  taskCreationDiv.style.zIndex = "0";

  hideOverlay();
  toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);

  taskInput.value = "";
  taskPrioritySelector.value = "None";
  taskDateInput.value = "";
  taskTimeInput.value = "";
  taskStatusSelector.value = "To Do";

  console.log("Value AFTER:", taskInput.value);
});

function getEventColor(priority, isDark) {
  if (priority === "Low") return "#90ee90";
  if (priority === "Medium") return "#ffcc00";
  if (priority === "High") return "#ff6b6b";
  if (!priority || priority === "None") {
    return isDark ? "#06bdf9" : "#a9d6fb";
  }
  return isDark ? "#06bdf9" : "#a9d6fb";
}

function addTaskToCalendar(task, overrideDate = null) {
  if (!task.dueDate || !calendar) return;

  const hasTime = !!task.dueTime;

  const baseDate =
    overrideDate instanceof Date
      ? overrideDate
      : new Date(overrideDate || task.dueDate);
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

function getTaskOccurrenceStart(task) {
  if (!task.dueDate) return null;

  const baseDate = task.dueTime
    ? `${task.dueDate}T${task.dueTime}:00`
    : `${task.dueDate}T00:00:00`;
  const date = new Date(baseDate);

  return Number.isNaN(date.getTime()) ? null : date;
}

function getCurrentOccurrence(task, referenceDate = new Date()) {
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

function getSortedTasks(mode) {
  const copy = [...tasks];

  switch (mode) {
    case "dateCreated":
      return copy.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );

    case "priority": {
      const weight = { High: 3, Medium: 2, Low: 1, None: 0 };
      return copy.sort(
        (a, b) => (weight[b.priority] ?? 0) - (weight[a.priority] ?? 0),
      );
    }

    case "dueDate": {
      return copy.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    }

    default:
      return copy;
  }
}

function addRecurrence(inputDate, recurrence) {
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

function isDifferentDay(a, b) {
  return (
    a.getFullYear() !== b.getFullYear() ||
    a.getMonth() !== b.getMonth() ||
    a.getDate() !== b.getDate()
  );
}

function isDifferentMonth(a, b) {
  return a.getFullYear() !== b.getFullYear() || a.getMonth() !== b.getMonth();
}

function isDifferentYear(a, b) {
  return a.getFullYear() !== b.getFullYear();
}

function daysSince(a, b) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = b.getTime() - a.getTime();
  return Math.floor(diff / msPerDay);
}

function isTaskDue(task, date = new Date()) {
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

function getOccurrences(task, start, end) {
  if (task.recurrence === "none") {
    const date = new Date(task.dueDate);
    return date >= start && date <= end ? [date] : [];
  }
  const occurrences = [];
  let current = new Date(task.dueDate);

  while (current <= end) {
    if (current >= start) {
      occurrences.push(new Date(current));
    }
    current = addRecurrence(current, task.recurrence);
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

function moveRenderedTasksToKanban() {
  const renderedTasks = document.querySelectorAll(".listTask");

  renderedTasks.forEach((listTask) => {
    const mainTask = listTask.querySelector(".mainTask");
    if (mainTask) {
      mainTask.draggable = isDraggable;
      mainTask.style.cursor = isDraggable ? "grab" : "default";
    }

    if (listTask.dataset.status === "done") {
      allDoneDropZone.appendChild(listTask);
    } else if (listTask.dataset.status === "in-progress") {
      inProgressDropZone.appendChild(listTask);
    } else {
      toDoDropZone.appendChild(listTask);
    }
  });

  taskList.classList.toggle("drag-mode", isDraggable);
  dropZones.style.display = isDraggable ? "flex" : "none";
  noTasksYetAlert.style.display = "none";
}

function renderTasks(mode = currentTaskSort) {
  console.log("renderTasks fired");
  taskList.innerHTML = "";
  toDoDropZone.innerHTML = "";
  inProgressDropZone.innerHTML = "";
  allDoneDropZone.innerHTML = "";

  const sorted = getSortedTasks(mode);
  sorted.forEach((task) => {
    createTaskElement(task);
  });

  if (document.documentElement.classList.contains("isKanbanView")) {
    moveRenderedTasksToKanban();
    inProgressDropZone.appendChild(noTasksYetAlert);
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

  taskViewSelector.value = selectedView;
  if (shouldSave) {
    localStorage.setItem("taskViewOption", selectedView);
  }

  document.documentElement.classList.toggle("isKanbanView", isKanbanView);
  dropZones.style.display = isKanbanView ? "flex" : "none";
  isDraggable = isKanbanView;
  taskList.classList.toggle("drag-mode", isKanbanView);

  currentTaskSort = taskSortSelector.value || currentTaskSort || "dateCreated";
  renderTasks(currentTaskSort);
}

taskSortSelector.addEventListener("change", (e) => {
  currentTaskSort = e.target.value;
  renderTasks(currentTaskSort);
});

function createNoteElement(note) {
  noNotesYetAlert.style.display = "none";

  const listNote = document.createElement("li");
  listNote.className = "listNote";
  listNote.id = `note-${note.id}`;

  const mainNote = document.createElement("div");
  mainNote.className = "mainNote";
  if (note.color) {
    mainNote.style.backgroundColor = note.color;
  }
  const mainNoteText = document.createElement("span");
  mainNoteText.className = "mainNoteText";
  mainNoteText.textContent = note.text;
  mainNoteText.dataset.originalNoteText = note.text;
  mainNote.appendChild(mainNoteText);

  const noteOptionsDiv = document.createElement("div");
  noteOptionsDiv.className = "noteOptionsDiv";
  mainNote.appendChild(noteOptionsDiv);
  listNote.appendChild(mainNote);
  notesList.appendChild(listNote);

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
function normalizeTaskPriority(priority) {
  const normalized = String(priority || "").toLowerCase();
  if (normalized === "high") return "High";
  if (normalized === "medium") return "Medium";
  if (normalized === "low") return "Low";
  return "None";
}

function formatDate(dateStr) {
  if (!dateStr) return null;

  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(timeStr) {
  if (!timeStr) return null;

  const [hours, minutes] = timeStr.split(":").map(Number);
  if (isNaN(hours) || isNaN(minutes)) return timeStr;

  const date = new Date();
  date.setHours(hours, minutes);

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

  const getDueTime = (task) => {
    if (!task.dueDate) return Infinity;
    const time = task.dueTime || "23:59";
    return new Date(`${task.dueDate}T${time}`);
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
function normalizeTaskStatusLabel(status) {
  const normalized = normalizeTaskStatus(status);
  if (normalized === "done") return "Done";
  if (normalized === "in-progress") return "In Progress";
  return "To Do";
}

/* normalizes date and time so that it can be used */
function normalizeTaskDateTime(dueDate, dueTime) {
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

function formatDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getNextWeekdayDate(dayName, forceNext = false) {
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
  const targetDay = weekdays[dayName.toLowerCase()];
  let daysAhead = (targetDay - today.getDay() + 7) % 7;
  if (forceNext && daysAhead === 0) daysAhead = 7;

  const due = new Date(today);
  due.setDate(today.getDate() + daysAhead);
  return formatDateInputValue(due);
}

function parseTimeText(match) {
  if (match.groups.hour24) {
    const hour = Number(match.groups.hour24);
    const minute = Number(match.groups.minute24);
    if (hour > 23 || minute > 59) return null;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }

  let hour = Number(match.groups.hour);
  const minute = Number(match.groups.minute || 0);
  const meridiem = match.groups.meridiem.toLowerCase().replaceAll(".", "");

  if (meridiem === "pm" && hour !== 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  if (hour > 23 || minute > 59) return null;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function cleanParsedTaskTitle(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(
      /^(remind me to|remember to|need to|i need to|please|task to)\s+/i,
      "",
    )
    .replace(/^[\s,.;:-]+|[\s,.;:-]+$/g, "");
}

function parseTaskLocally(text) {
  let remaining = text.trim();
  let dueDate = null;
  let dueTime = null;
  let priority = "normal";

  const priorityMatch = remaining.match(
    /\b(high|medium|normal|low)\s+priority\b|\bpriority\s+(high|medium|normal|low)\b/i,
  );
  if (priorityMatch) {
    priority = (priorityMatch[1] || priorityMatch[2]).toLowerCase();
    remaining =
      `${remaining.slice(0, priorityMatch.index)} ${remaining.slice(priorityMatch.index + priorityMatch[0].length)}`.trim();
  }

  const relativeDateMatch = remaining.match(/\b(today|tomorrow)\b/i);
  if (relativeDateMatch) {
    const due = new Date();
    if (relativeDateMatch[1].toLowerCase() === "tomorrow") {
      due.setDate(due.getDate() + 1);
    }
    dueDate = formatDateInputValue(due);
    remaining =
      `${remaining.slice(0, relativeDateMatch.index)} ${remaining.slice(relativeDateMatch.index + relativeDateMatch[0].length)}`.trim();
  }

  const weekdayMatch = remaining.match(
    /\b(?:(on|by|due|this|next)\s+)?(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i,
  );
  if (weekdayMatch) {
    dueDate = getNextWeekdayDate(
      weekdayMatch[2],
      (weekdayMatch[1] || "").toLowerCase() === "next",
    );
    remaining =
      `${remaining.slice(0, weekdayMatch.index)} ${remaining.slice(weekdayMatch.index + weekdayMatch[0].length)}`.trim();
  }

  const timeMatch = remaining.match(
    /\b(?:at\s+)?(?<hour>\d{1,2})(?::(?<minute>[0-5]\d))?\s*(?<meridiem>a\.?m\.?|p\.?m\.?)\b|\b(?:at\s+)(?<hour24>\d{1,2}):(?<minute24>[0-5]\d)\b/i,
  );
  if (timeMatch) {
    dueTime = parseTimeText(timeMatch);
    remaining =
      `${remaining.slice(0, timeMatch.index)} ${remaining.slice(timeMatch.index + timeMatch[0].length)}`.trim();
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

function createTask(taskData) {
  const title = String(taskData.title || "").trim();
  if (!title) return null;

  const { dueDate, dueTime } = normalizeTaskDateTime(
    taskData.dueDate,
    taskData.dueTime,
  );
  const recurrence = dueDate ? taskData.recurrence || "none" : "none";
  const task = {
    id: taskData.id || crypto.randomUUID(),
    title,
    priority: normalizeTaskPriority(taskData.priority),
    dueDate,
    dueTime,
    status: normalizeTaskStatusLabel(taskData.status),
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
    title: taskInput.value,
    priority: taskPrioritySelector.value,
    dueDate: taskDateInput.value || null,
    dueTime: taskTimeInput.value || null,
    status: taskStatusSelector.value,
    recurrence: taskRecurrenceSelector.value,
  });
  if (!task) return;

  toDoList.style.height = "328.5px";
  focusTimer.style.height = "330px";
  taskCreationDiv.style.display = "none";
  taskInput.value = "";
  taskPrioritySelector.value = "None";
  taskDateInput.value = "";
  taskTimeInput.value = "";
  taskStatusSelector.value = "To Do";
  taskRecurrenceSelector.value = "none";
}

function addNote() {
  const note = {
    id: crypto.randomUUID(),
    text: noteInput.value.trim(),
    color: selectedNoteColor || null,
  };
  if (!note.text) return;

  allNotes.push(note);
  saveNotes();
  renderNotes();
  addActivity("Added a note", "note");

  noteCreationDiv.style.display = "none";
  noteInput.value = "";
  noteInput.style.backgroundColor = "";
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

function updateHighlightedResult(searchResults) {
  searchResults.forEach((item, index) => {
    if (index === selectedIndex) {
      item.style.backgroundColor = isDark() ? "#17171c" : "#f8f8f8";
    } else {
      item.style.backgroundColor = "";
    }
  });

  if (searchResults[selectedIndex]) {
    searchResults[selectedIndex].scrollIntoView({ block: "nearest" });
  }
}

const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
const modifierKey = isMac ? "⌘K" : "Ctrl+K";

const searchBarPlaceholders = [
  `Search for tasks and notes... (${modifierKey})`,
  `Create tasks with ":a <task description>" (${modifierKey})`,
];
let currentIndex = 0;
searchBar.placeholder = searchBarPlaceholders[0];

function rotatePlaceholder() {
  searchBar.classList.add("fade-out");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % searchBarPlaceholders.length;
    searchBar.placeholder = searchBarPlaceholders[currentIndex];
    searchBar.classList.remove("fade-out");
  }, 300);
}
setInterval(rotatePlaceholder, 5000);

async function handleSearchKeys(e) {
  const searchResults = document.querySelectorAll(".searchResult");
  const isUsingSearch =
    document.activeElement === searchBar ||
    searchResultsMenu.classList.contains("show");

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
    const input = searchBar.value.trim();
    if (input.startsWith(":a ")) {
      console.log("ai command triggered");
      const text = input.slice(3).trim();
      if (!text) return;
      let taskCreated = false;
      const localParse = parseTaskLocally(text);

      if (localParse.parsed) {
        taskCreated = Boolean(createTask(localParse.task));
      }

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

      if (!taskCreated) {
        createTask(localParse.task);
      }

      closeSearchBar();
      searchBar.value = "";
      return;
    }
    if (selectedIndex >= 0) {
      searchResults[selectedIndex].click();
      closeSearchBar();
      return;
    }
    console.log({ input, selectedIndex, hasResults: searchResults.length });
    closeSearchBar();
    return;
  }

  if (e.key === "Escape") {
    searchResultsMenu.classList.remove("show");
    return;
  }

  updateHighlightedResult(searchResults);
}

function closeSearchBar() {
  searchBar.blur();
  searchBar.value = "";
  searchResultsMenu.classList.remove("show");
  selectedIndex = -1;
}

function normalizeStr(str) {
  return str.toLowerCase().trim();
}

function isWordStart(text, index) {
  return index === 0 || text[index - 1] === " ";
}

function fuzzyScore(query, text) {
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

function highlightMatch(text, query) {
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

function searchBarMagic() {
  selectedIndex = -1;

  const searchQuery = normalizeStr(searchBar.value);

  searchResultsMenu.innerHTML = "";

  if (!searchQuery) {
    searchResultsMenu.style.display = "none";
    return;
  }

  let searchResults = [];

  document.querySelectorAll(".listTask").forEach((task) => {
    const taskTextSpanEl = task.querySelector(".taskTextSpan");
    if (!taskTextSpanEl) return;
    const taskText = taskTextSpanEl.dataset.originalTaskText;
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
        element: task,
        score,
      });
    }
  });

  document.querySelectorAll(".listNote").forEach((note) => {
    const noteText =
      note.querySelector(".mainNoteText").dataset.originalNoteText;
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
        element: note,
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

  searchResultsMenu.style.display = "block";

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
  const renderedResults = searchResultsMenu.querySelectorAll(".searchResult");
  updateHighlightedResult(renderedResults);

  console.log("Search results:", searchResults);

  searchResultsMenu.classList.add("show");
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

  if (!searchDiv.contains(e.target)) {
    searchResultsMenu.classList.remove("show");
  }
});

document.addEventListener("keydown", handleSearchKeys);
console.log("keydown listener attached");

function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

searchBar.addEventListener("input", debounce(searchBarMagic, 150));

searchBar.addEventListener("focus", () => {
  selectedIndex = -1;
});

function isDark() {
  return document.documentElement.dataset.mode === "dark";
}

function getTaskUrgency(task) {
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

function applyUrgencyStyle(el, urgency) {
  if (!el) return;
  el.style.setProperty("--urgency", urgency.toFixed(3));

  const r = Math.round(45 + urgency * 210);
  const g = Math.round(58 - urgency * 38);
  const b = Math.round(200 - urgency * 160);

  el.style.setProperty("--urgency-r", r);
  el.style.setProperty("--urgency-g", g);
  el.style.setProperty("--urgency-b", b);

  const duration = 2.4 - urgency * 1.4;
  el.style.animationDuration = `${duration.toFixed(2)}s`;
}

customizeBtn.addEventListener("click", () => {
  customizeDiv.classList.add("show");
  customizeDiv.classList.remove("closing");
});

const closeCustomizeBtn = document.querySelector(".closeCustomizeBtn");
closeCustomizeBtn.addEventListener("click", () => {
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
    applyTheme(themeName);
  });
});

function applyTheme(themeName) {
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
    sidebar.style.display = "none";
    section1.style.flexDirection = "column";
    section2.style.flexDirection = "column";
    dashboardContent.style.marginLeft = "0px";
  } else {
    console.log("Desktop");
    sidebar.style.display = "flex";
    section1.style.flexDirection = "row";
    section2.style.flexDirection = "row";
    dashboardContent.style.marginLeft = "300px";
  }
}

hamburgerBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.add("closing");
    setTimeout(() => {
      sidebar.classList.remove("show", "closing");
      document.documentElement.removeChild(sidebar);
    }, 200);
    localStorage.setItem("sidebarHidden", "true");
    document.documentElement.classList.add("sidebarHidden");
  } else {
    document.documentElement.appendChild(sidebar);
    sidebar.offsetHeight;
    sidebar.classList.add("show");
    sidebar.classList.remove("closing");
    localStorage.setItem("sidebarHidden", "false");
    document.documentElement.classList.remove("sidebarHidden");
  }
});

window.addEventListener("resize", responsiveWebsite);
responsiveWebsite();

document.addEventListener("DOMContentLoaded", () => {
  taskCreationDiv.style.display = "none";

  syncRecurringTasks(new Date());

  if (localStorage.getItem("sidebarHidden") === "true") {
    sidebar.classList.remove("show");
  } else {
    sidebar.classList.add("show");
  }

  toggleAI();

  if (localStorage.getItem("miniAnalyticsExpanded") === "true")
    miniAnalytics.classList.add("show");

  currentTaskSort = taskSortSelector.value || "dateCreated";
  setTaskView(localStorage.getItem("taskViewOption") || "listView", false);

  searchBar.value = "";

  taskPrioritySelector.value = "None";
  taskDateInput.value = "";
  taskTimeInput.value = "";
  taskStatusSelector.value = "To Do";

  refreshTaskDropdown();

  const personalSettingsOption = document.querySelector(
    ".settingsNavList a[href='#personal']",
  );
  personalSettingsOption?.classList.add("active");

  noteInput.value = "";

  const savedNotes = safeParse("notes");
  savedNotes.forEach((note) => {
    createNoteElement(note);
  });

  const savedAskForNotiDisplay = localStorage.getItem("askForNotiDisplay");
  if (savedAskForNotiDisplay) {
    askForNotifications.remove();
    sidebar.style.marginTop = "0px";
    toDoList.style.marginTop = "0px";
  } else {
    document.body.appendChild(askForNotifications);
    sidebar.style.marginTop = "0px";
    toDoList.style.marginTop = "0px";
  }

  const sidebarHidden = localStorage.getItem("sidebarHidden") === "true";
  if (sidebarHidden) {
    document.documentElement.classList.add("sidebarHidden");
  } else {
    document.documentElement.classList.remove("sidebarHidden");
  }

  loadActivities();

  var calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "",
        center: "prev,title,next",
        right: "dayGridMonth,dayGridWeek,dayGridDay",
      },
      datesSet() {
        renderCalendarEvents();
      },
      eventDidMount(info) {
        const taskId = info.event.extendedProps?.taskId || info.event.id;
        const taskMap = new Map(tasks.map((t) => [String(t.id), t]));
        const task = taskMap.get(String(taskId));
        if (!task) return;

        const urgency = getTaskUrgency(task);
        applyUrgencyStyle(info.el.closest(".fc-event") || info.el, urgency);
      },
      dateClick: function (info) {
        taskCreationDiv.style.display = "flex";
        taskCreationDiv.style.position = "fixed";
        taskCreationDiv.style.zIndex = "9999";
        taskCreationDiv.style.top = "50%";
        taskCreationDiv.style.left = "50%";
        taskCreationDiv.style.transform = "translate(-50%, -50%)";

        showOverlay();

        taskDateInput.value = info.dateStr;

        document.body.appendChild(taskCreationDiv);

        document
          .querySelector(".cancelTaskCreationBtn")
          .addEventListener("click", () => {
            taskCreationDiv.style.display = "none";
            taskCreationDiv.style.position = "relative";
            taskCreationDiv.style.zIndex = "0";
            taskCreationDiv.style.top = "0px";
            taskCreationDiv.style.left = "0px";
            taskCreationDiv.style.transform = "none";

            hideOverlay();

            taskInput.value = "";
            taskDateInput.value = "";

            toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
          });

        document.querySelector(".addTaskBtn").addEventListener("click", () => {
          addTask();

          taskCreationDiv.style.display = "none";
          taskCreationDiv.style.position = "relative";
          taskCreationDiv.style.top = "0px";
          taskCreationDiv.style.left = "0px";
          taskCreationDiv.style.transform = "none";
          taskCreationDiv.style.order = "0";

          addTaskBtn.textContent = "Add Task";
          addTaskBtn.style.padding = "0px 10px";

          hideOverlay();

          taskInput.value = "";
          taskDateInput.value = "";

          toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
        });
      },
    });
    calendar.render();
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

function saveEditedTask() {
  const task = tasks.find((t) => String(t.id) === String(editingTaskId));
  if (!task) return;

  task.title = taskInput.value.trim();
  task.priority = taskPrioritySelector.value;
  task.dueDate = taskDateInput.value || null;
  task.dueTime = taskTimeInput.value || null;
  task.status = taskStatusSelector.value;
  task.recurrence = task.dueDate ? taskRecurrenceSelector.value : "none";

  saveTasks();
  renderTasks(currentTaskSort);
  renderCalendarEvents();
  refreshTaskDropdown();
  editingTaskId = null;
  isEditing = false;
  taskCreationDiv.style.display = "none";
  document.body.removeChild(taskCreationDiv);
  hideOverlay();
}

function createSubtask() {
  return {
    id: crypto.randomUUID(),
    title: taskInput.value.trim(),
    completed: false,
    priority: taskPrioritySelector.value,
    dueDate: taskDateInput.value || null,
    dueTime: taskTimeInput.value || null,
    status: taskStatusSelector.value,
    recurrence: taskRecurrenceSelector.value,
    createdAt: Date.now(),
  };
}

function addSubtask(parentTaskId) {
  const parentTask = tasks.find((t) => String(t.id) === String(parentTaskId));
  if (!parentTask) return;

  if (!parentTask.subtasks) parentTask.subtasks = [];

  const subtask = createSubtask();
  parentTask.subtasks.push(subtask);
  saveTasks();
  renderTasks(currentTaskSort);
}

function createSubtaskElement(subtask) {
  const subtaskEl = document.createElement("li");
  subtaskEl.className = "subtask";

  const subtaskCheckbox = document.createElement("input");
  subtaskCheckbox.type = "checkbox";
  subtaskCheckbox.className = "subtaskCheckbox";
  subtaskCheckbox.checked = subtask.completed;

  const subtaskTitle = document.createElement("span");
  subtaskTitle.textContent = subtask.title;

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

dashboardBtn.addEventListener("click", () => {
  document.documentElement.classList.add("dashboardActive");
  document.documentElement.classList.remove("isSettingsView");
  document.documentElement.classList.remove("calendarView");
});

calendarBtn.addEventListener("click", () => {
  document.documentElement.classList.add("calendarView");
  document.documentElement.classList.remove("dashboardActive");
  document.documentElement.classList.remove("isSettingsView");
});

settingsBtn.addEventListener("click", () => {
  document.documentElement.classList.add("isSettingsView");
  document.documentElement.classList.remove("dashboardActive");
  document.documentElement.classList.remove("calendarView");

  preferredNameInput.value = localStorage.getItem("preferredName") || "";
  fullNameInput.value = localStorage.getItem("fullName") || "";
});

const settingsSections = document.querySelectorAll(".actualSettings > div");

settingsNavOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();

    settingsNavOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    settingsSections.forEach((section) => {
      section.style.display = "none";
    });

    const target = option.getAttribute("href").substring(1);
    document.querySelector(`.${target}Section`).style.display = "flex";
  });
});

function setupDate() {
  const now = new Date();
  currentDate.textContent = now.toLocaleDateString("en-US", {
    dateStyle: "full",
  });
}

function getGreeting(hour) {
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

fullNameInput.addEventListener("input", () => {
  localStorage.setItem("fullName", fullNameInput.value.trim());
  setupGreeting();
});

preferredNameInput.addEventListener("input", () => {
  localStorage.setItem("preferredName", preferredNameInput.value.trim());
  setupGreeting();
});

setupDate();
setupGreeting();

enableNotificationsBtn.addEventListener("click", () => {
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

closeNotiPopup.addEventListener("click", () => {
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

themeBtn.addEventListener("click", () => {
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

agentBtn.addEventListener("click", () => {
  aiOptionsDiv.classList.toggle("show");
});

prioritySuggestionOption.addEventListener("click", () => {
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

    aiDiv.classList.add("show");

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
      result.priorities.forEach((item, index) => {
        const entry = document.createElement("div");
        entry.className = "aiResultEntry";
        entry.innerHTML = `<strong>${index + 1}. ${item.title}</strong><p>${item.reason}</p>`;
        console.log(result);
        aiPrioritySuggestions.appendChild(entry);
      });
    });

    aiDiv.append(aiPrioritySuggestionBtn, aiPrioritySuggestions);
    document.body.appendChild(aiDiv);
    showOverlay();
    document
      .querySelectorAll("body > :not(.aiDiv):not(.overlay)")
      .forEach((el) => (el.inert = true));
  } else {
    hideOverlay();
    document.querySelector(".aiDiv")?.remove();
    document.querySelectorAll("body >  *").forEach((el) => (el.inert = false));
  }
});

decrastinatorBtn.addEventListener("click", () => {
  const isDecrastinatorView =
    document.documentElement.classList.toggle("decrastinatorView");

  if (isDecrastinatorView) {
    const decrastinatorDiv = document.querySelector(".decrastinatorDiv");
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
    decrastinatorMinutesDiv.textContent = `${decrastinatorInitMinutes}:${decrastinatorInitSeconds.toString().padStart(2, "0")}`;
    decrastinatorTaskSelector.innerHTML = "";

    const decrastinatorTaskSelectorPlaceholder =
      document.createElement("option");
    decrastinatorTaskSelectorPlaceholder.className =
      "decrastinatorTaskSelectorPlaceholder";
    decrastinatorTaskSelectorPlaceholder.textContent = "Select a task";
    decrastinatorTaskSelectorPlaceholder.disabled = true;
    decrastinatorTaskSelectorPlaceholder.selected = true;

    decrastinatorTaskSelector.appendChild(decrastinatorTaskSelectorPlaceholder);

    tasks.forEach((task) => {
      if (!task.completed) {
        const decrastinationTaskOption = document.createElement("option");
        decrastinationTaskOption.value = task.id;
        decrastinationTaskOption.textContent = task.title;
        decrastinatorTaskSelector.appendChild(decrastinationTaskOption);
      }
    });

    startDecrastinatorBtn.onclick = () => {
      if (decrastinatorIsRunning) return;
      decrastinatorIsRunning = true;

      const selectedTaskId = decrastinatorTaskSelector.value;

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
        decrastinatorMinutesDiv.textContent = `${decrastinatorMinutes}:${decrastinatorSeconds.toString().padStart(2, "0")}`;

        if (decrastinatorTotalSeconds <= 0) {
          clearInterval(decrastinatorIntervalId);
        }
      }, 1000);
    };

    showOverlay();
    document
      .querySelectorAll("body > :not(.decrastinatorDiv):not(.overlay)")
      .forEach((el) => (el.inert = true));
  } else {
    hideOverlay();
    const decrastinatorDiv = document.querySelector(".decrastinatorDiv");
    if (decrastinatorDiv) {
      decrastinatorDiv.hidden = true;
    }
    document.querySelectorAll("body >  *").forEach((el) => (el.inert = false));
    clearInterval(decrastinatorIntervalId);
    decrastinatorIsRunning = false;
  }
});

closeDecrastinatorBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("decrastinatorView");
  const decrastinatorDiv = document.querySelector(".decrastinatorDiv");
  if (decrastinatorDiv) {
    decrastinatorDiv.hidden = true;
    decrastinatorDiv.style.display = "none";
  }
  hideOverlay();
  document.querySelectorAll("body >  *").forEach((el) => (el.inert = false));
  clearInterval(decrastinatorIntervalId);
  decrastinatorIsRunning = false;
});

window.addEventListener("load", () => {
  if (isDark()) {
    themeBtn.innerHTML = `<img src="Images/Light-Mode-Icon.png" alt="Light Mode Icon" class="themeIcon">`;
  } else {
    themeBtn.innerHTML = `<img src="Images/Dark-Mode-Icon.png" alt="Dark Mode Icon" class="themeIcon">`;
  }
});

const TASK_COST = {
  High: 10,
  Medium: 6,
  Low: 3,
  None: 1,
};

const FOCUS_COST = {
  High: 15,
  Medium: 10,
  Low: 5,
  None: 3,
};

function updateEnergy(amount) {
  console.log("Energy change:", amount);
  energyLevel = Math.max(0, Math.min(100, energyLevel - amount));
  renderEnergy();
  console.log(`Energy updated by ${amount}. New energy level: ${energyLevel}`);
}

function restoreEnergy(amount) {
  console.log("Energy restore:", amount);
  energyLevel = Math.max(0, Math.min(100, energyLevel + amount));
  renderEnergy();
  console.log(`Energy restored by ${amount}. New energy level: ${energyLevel}`);
}

function completeTaskAndLoseEnergy(task) {
  const taskPriority = task.priority || "None";
  updateEnergy(TASK_COST[taskPriority] || 1);
}

function completeFocusSession() {
  const taskPriority = currentFocusedTask?.dataset?.priority || "None";
  updateEnergy(FOCUS_COST[taskPriority] || 3);
}

function takeBreak(minutes) {
  const restore = minutes / 2;
  restoreEnergy(restore);
}

function renderEnergy() {
  energyGauge.style.width = `${energyLevel}%`;
  energyGauge.style.transition = "width 0.3s ease";
  percentOfEnergy.textContent = `${Math.round(energyLevel)}%`;
  percentOfEnergy.style.left = "30%";
  
  if (energyLevel >= 81) {
    energyGauge.style.backgroundColor = "#90ee90";
  } else if (energyLevel <= 80 && energyLevel >= 61) {
    energyGauge.style.backgroundColor = "#b3ff00";
  } else if (energyLevel <= 60 && energyLevel >= 41) {
    energyGauge.style.backgroundColor = "#ffd700";
  } else if (energyLevel <= 40 && energyLevel >= 21) {
    energyGauge.style.backgroundColor = "#ff7700";
  } else {
    energyGauge.style.backgroundColor = "#ff4500";
  }
}

const savedTheme = localStorage.getItem("customTheme");
if (savedTheme) {
  applyTheme(savedTheme);
}

noTasksYetAlert.style.display = "inline";
noNotesYetAlert.style.display = "inline";

function normalizeTaskStatus(status) {
  if (!status) return "to-do";
  const normalized = status.toLowerCase().replace(/\s/g, "-");

  if (normalized === "todo") return "to-do";
  if (normalized === "in-progress") return "in-progress";
  if (normalized === "done") return "done";

  return normalized;
}

taskViewSelector.addEventListener("change", () => {
  setTaskView(taskViewSelector.value);
});

let currentDraggedTask = null;

[toDoDropZone, inProgressDropZone, allDoneDropZone].forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("drag-over-active");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("drag-over-active");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("drag-over-active");

    const taskId = e.dataTransfer.getData("text/plain");
    if (!taskId) return;

    const draggedTaskCard = document.querySelector(`[data-id="${taskId}"]`);
    if (!draggedTaskCard) return;

    const draggedTask = draggedTaskCard.closest(".listTask");
    if (!draggedTask) return;

    const task = tasks.find((t) => String(t.id) === String(taskId));
    if (!task) return;

    const newStatus = normalizeTaskStatusLabel(zone.dataset.status);
    task.status = newStatus;

    draggedTask.dataset.status = normalizeTaskStatus(newStatus);
    draggedTask.classList.toggle("completed", newStatus === "Done");
    zone.appendChild(draggedTask);

    saveTasks();
  });
});

addBtn.addEventListener("click", () => {
  taskCreationDiv.style.display = "flex";
  taskInput.value = "";
  taskPrioritySelector.value = "None";
  taskDateInput.value = "";
  taskTimeInput.value = "";
  taskStatusSelector.value = "To Do";
  taskRecurrenceSelector.value = "none";
  toDoList.style.height = "495px";
  focusTimer.style.height = "496.5px";
});

cancelTaskCreationBtn.addEventListener("click", () => {
  taskCreationDiv.style.display = "none";
  toDoList.style.height = "328.5px";
  focusTimer.style.height = "330px";
  taskRecurrenceSelector.value = "none";
});

addTaskBtn.addEventListener("click", () => {
  if (currentParentTaskId) {
    addSubtask(currentParentTaskId);
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
  noTasksYetAlert.style.display = tasks.length === 0 ? "inline" : "none";
}

function showNoNotesYet() {
  if (notesList.children.length === 0) {
    noNotesYetAlert.style.display = "inline";
  } else {
    noNotesYetAlert.style.display = "none";
  }
}

function updateTasksDoneCount() {
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((t) => t.completed).length;
  const tasksLeft = totalTasks - doneTasks;

  const doneDisplay = document.querySelector(".numberOfTasksDone");
  if (doneDisplay) {
    doneDisplay.textContent = doneTasks;
  }

  const tasksLeftDisplay = document.querySelector(".numberOfTasksLeft");
  if (tasksLeftDisplay) {
    tasksLeftDisplay.textContent = tasksLeft;
  }
  if (totalTasks === 0) {
    tasksLeftDisplay.textContent = "-";
  }

  const totalTasksDisplay = document.querySelector(".numberOfTasksTotal");
  if (totalTasksDisplay) {
    totalTasksDisplay.textContent = `of ${totalTasks} total`;
  }
}

function checkTaskDue(listTask, taskText, task) {
  const checkbox = listTask.querySelector(".taskCheckbox");
  if (Notification.permission !== "granted" || task.completed) return;

  const now = new Date();
  const today = now.toISOString().split("T")[0];

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
    due.setHours(hour, minute, 0, 0);
    if (now >= due) {
      new Notification("Task Due Now", {
        body: `Your task "${taskText}" is due now.`,
      });
      listTask.dataset.timeNotified = "true";
    }
  }
}

function sortTasksInWhatToFocusOn() {}

function toggleAI() {
  const aiToggle = document.getElementById("aiToggle");
  const isChecked = aiToggle.checked;
  localStorage.setItem("aiEnabled", isChecked);
  agentBtn.style.display = isChecked ? "flex" : "none";
}

function loadAIState() {
  const aiToggle = document.getElementById("aiToggle");
  const aiEnabled = localStorage.getItem("aiEnabled") === "true";
  aiToggle.checked = aiEnabled;
  agentBtn.style.display = aiEnabled ? "flex" : "none";
}

aiToggle.addEventListener("change", toggleAI);
loadAIState();

function loadActivities() {
  activityList.innerHTML = "";

  if (activityLog.length === 0) {
    activityList.innerHTML = "<li class='activityItem'>No activities yet</li>";
    return;
  }

  activityLog.forEach(renderActivity);
}

function getActivityLog() {
  return safeParse("activityLog");
}

function getTimeAgo(timestamp) {
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

function getActivityIcon(type) {
  const activityIcons = {
    task: "Images/Checkmark.png",
    note: "Images/Note-Icon.png",
    focus: "Images/Clock.png",
    delete: "Images/Delete-Icon.png",
  };
  const normalizedActivityType = type?.toLowerCase().trim();
  return activityIcons[normalizedActivityType] || "";
}

function renderActivity(activity) {
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
  activityList.appendChild(activityItem);
}

function addActivity(message, type = "info") {
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
  taskSelectionDropdown.innerHTML = `<option value="" disabled selected>Choose a task to focus on...</option>`;

  tasks.forEach((task) => {
    if (!task.completed) {
      const option = document.createElement("option");
      option.value = task.id;
      option.textContent = task.title;
      taskSelectionDropdown.appendChild(option);
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
let intervalId = null;
let isRunning = false;

pauseTimerBtn.style.display = "none";

function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timerMinutes.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function updateRing(timeLeft) {
  const fraction = timeLeft / totalTime;
  const offset = circumference - fraction * circumference;
  timerProgressRing.style.strokeDashoffset = offset;
}

lengthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const minutes = parseInt(button.textContent);
    totalTime = minutes * 60;
    restartTimer();
  });
});

/* make the currentFocusedTask disappear when restarting the timer, and reappear when starting the timer again */

function enterFocusMode() {
  if (!taskSelectionDropdown.value) return;

  focusMode = true;

  activeFocusTask =
    taskSelectionDropdown.options[taskSelectionDropdown.selectedIndex].text;
  startTimer();
}

function startTimer() {
  if (isRunning) return;

  if (!taskSelectionDropdown.value && !focusMode) return;
  const selectedFocusedTask = focusMode
    ? activeFocusTask
    : taskSelectionDropdown.options[taskSelectionDropdown.selectedIndex].text;
  currentFocusedTask.textContent = "Focusing on: " + selectedFocusedTask;
  currentFocusedTask.style.display = "inline";
  currentFocusedTask.dataset.order = "2";
  addActivity(`Started focus session: ${selectedFocusedTask}`, "focus");

  const currentFocusedTaskDiv = document.querySelector(
    ".currentFocusedTaskDiv",
  );
  currentFocusedTaskDiv.style.gap = "5px";
  currentFocusedTaskDiv.style.display = "flex";
  taskSelectionDropdown.style.display = "none";

  timerButtons.style.marginTop = "15px";

  isRunning = true;
  startTimerBtn.style.display = "none";
  pauseTimerBtn.style.display = "flex";

  const endTime = Date.now() + totalSeconds * 1000;

  intervalId = setInterval(() => {
    const remaining = Math.max(0, Math.round((endTime - Date.now()) / 1000));
    totalSeconds = remaining;
    updateTimerDisplay();
    updateRing(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      isRunning = false;
      if (Notification.permission === "granted") {
        new Notification("Focus timer finished! Take a break.");
      }
      document.querySelector(".currentFocusedTaskDiv").remove();
      localStorage.setItem(
        "focusSessions",
        Number(localStorage.getItem("focusSessions") || 0) + 1,
      );
      updateFocusSessionsCount();
      restartTimer();
    }
  }, 250);
}

function pauseTimer() {
  clearInterval(intervalId);
  isRunning = false;
  startTimerBtn.style.display = "flex";
  pauseTimerBtn.style.display = "none";
}

function restartTimer() {
  clearInterval(intervalId);
  isRunning = false;
  focusMode = false;
  activeFocusTask = null;
  totalSeconds = totalTime;
  updateTimerDisplay();
  updateRing(totalTime);
  startTimerBtn.style.display = "flex";
  pauseTimerBtn.style.display = "none";
  if (!focusMode) {
    currentFocusedTask.style.display = "none";
  }
  taskSelectionDropdown.style.display = "block";
  timerButtons.style.marginTop = "0px";

  focusMode = false;
  activeFocusTask = null;
}

startTimerBtn.addEventListener("click", enterFocusMode);
pauseTimerBtn.addEventListener("click", pauseTimer);
restartTimerBtn.addEventListener("click", restartTimer);

updateTimerDisplay();

addBtn2.addEventListener("click", () => {
  noteCreationDiv.style.display = "flex";
});

let selectedNoteColor = null;

noteColorOptions.forEach((button) => {
  button.addEventListener("click", () => {
    selectedNoteColor = button.dataset.color;
    noteInput.style.backgroundColor = selectedNoteColor;
  });
});

cancelNoteCreationBtn.addEventListener("click", () => {
  noteCreationDiv.style.display = "none";
  noteInput.style.backgroundColor = "";
  selectedNoteColor = null;
});

addNoteBtn.addEventListener("click", () => {
  addNote();
  showNoNotesYet();
});

notesList.addEventListener("mouseover", (e) => {
  const closestMainNote = e.target.closest(".mainNote");
  if (!closestMainNote) return;

  const editNoteBtn = closestMainNote.querySelector(".editNoteBtn");
  const deleteNoteBtn = closestMainNote.querySelector(".deleteNoteBtn");
  if (editNoteBtn) editNoteBtn.style.display = "flex";
  if (deleteNoteBtn) deleteNoteBtn.style.display = "flex";

  closestMainNote.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
});

notesList.addEventListener("mouseout", (e) => {
  const closestMainNote = e.target.closest(".mainNote");
  if (!closestMainNote) return;
  const editNoteBtn = closestMainNote.querySelector(".editNoteBtn");
  const deleteNoteBtn = closestMainNote.querySelector(".deleteNoteBtn");
  if (editNoteBtn) editNoteBtn.style.display = "none";
  if (deleteNoteBtn) deleteNoteBtn.style.display = "none";
  closestMainNote.style.boxShadow = "none";
});

notesList.addEventListener("click", (e) => {
  const closestMainNote = e.target.closest(".mainNote");
  if (!closestMainNote) return;

  if (e.target.closest(".editNoteBtn")) {
    showOverlay();

    const isEditingNote =
      document.documentElement.classList.toggle("editingNote");

    if (isEditingNote) {
      const noteId = closestMainNote
        .closest(".listNote")
        .id.replace("note-", "");
      const note = allNotes.find((n) => n.id === noteId);
      if (!note) return;

      editingNoteColor = note.color || null;

      const noteEditDiv = document.createElement("div");
      noteEditDiv.className = "noteEditDiv";

      const noteEditInput = document.createElement("textarea");
      noteEditInput.className = "noteEditInput";
      noteEditInput.value =
        closestMainNote.querySelector(".mainNoteText").textContent;
      noteEditInput.placeholder = "Edit your note...";
      noteEditInput.style.backgroundColor = note.color || "";

      const editNoteColorOptions = document
        .querySelector(".noteColorOptions")
        .cloneNode(true);

      editNoteColorOptions.style.flexDirection = "column";
      editNoteColorOptions.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          editingNoteColor = button.dataset.color;
          noteEditInput.style.backgroundColor = editingNoteColor;
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

  if (e.target.closest(".deleteNoteBtn")) {
    const listNote = e.target.closest(".listNote");
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

expandMiniAnalyticsBtn.addEventListener("click", () => {
  miniAnalytics.classList.toggle("show");
  localStorage.setItem(
    "miniAnalyticsExpanded",
    miniAnalytics.classList.contains("show"),
  );
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

async function generateSchedule(tasks) {
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
