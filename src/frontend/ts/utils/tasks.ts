import { elements } from "../ui/elements";
import type { Task } from "../types/tasks";
import type { Priority, Status, Recurrence } from "../types/tasks";
import { saveTasks } from "../services/storage/tasks";
import { renderTasks } from "../features/tasks/render";

export function addRecurrence(inputDate: Date | string, recurrence: "daily" | "weekly" | "monthly" | "yearly") {
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

export function getOccurrences(task: Task, start: Date, end: Date) {
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

export function getTaskOccurrenceStart(task: Task) {
  if (!task.dueDate) return null;

  const baseDate = task.dueTime
    ? `${task.dueDate}T${task.dueTime}:00`
    : `${task.dueDate}T00:00:00`;
  const date = new Date(baseDate);

  return Number.isNaN(date.getTime()) ? null : date;
}

export function getCurrentOccurrence(task: Task, referenceDate = new Date()) {
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

export function syncRecurringTasks(now = new Date(), tasks: Task[]) {
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

export function parseTaskLocally(text: string) {
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

export function parseTimeText(match: RegExpExecArray) {
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

export function cleanParsedTaskTitle(text: string) {
  return text
    .replace(/\s+/g, " ")
    .replace(
      /^(remind me to|remember to|need to|i need to|please|task to)\s+/i,
      "",
    )
    .replace(/^[\s,.;:-]+|[\s,.;:-]+$/g, "");
}

export function getNextWeekdayDate(dayName: string, forceNext = false) {
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
