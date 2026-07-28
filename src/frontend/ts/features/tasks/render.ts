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

export function createTaskElement(task: Task): HTMLLIElement | null {
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
  taskOptionsBtn.innerHTML = `<img class="taskOptionsBtnIcon" src="/Images/Task-Options-Icon.png" alt="Task Options Icon">`;

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
  taskDateImg.src = "/Images/Date-Icon.png";
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
    recurrenceImg.src = "/Images/Restart-Timer-Icon.png";
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

export function renderTasks(mode = currentTaskSort) {
  if (taskList) taskList.innerHTML = "";
  if (toDoDropZone) toDoDropZone.innerHTML = "";
  if (inProgressDropZone) inProgressDropZone.innerHTML = "";
  if (allDoneDropZone) allDoneDropZone.innerHTML = "";

  if (!document) return;

  const sorted = getSortedTasks(mode as "dateCreated" | "priority" | "dueDate");
  sorted.forEach((task: Task) => {
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

export function setTaskView(taskViewOption = "listView", shouldSave = true) {
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