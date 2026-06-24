import { safeJsonParse, safeNumber } from "./utils";

function safeParse(key, fallback = []) {
  try {
    const value = localStorage.getItem(key);
    return safeJsonParse(value, fallback);
  } catch (e) {
    console.warn(`${key} corrupted, resetting...`);
    localStorage.removeItem(key);
    return fallback;
  }
}

export function loadTasks() {
    return safeParse("tasks", []);
}

export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadNotes() {
    return safeParse("notes", []);
}

export function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

export function loadActivityLog() {
    return safeParse("activityLog", []);
}

export function saveActivityLog(activityLog) {
    localStorage.setItem("activityLog", JSON.stringify(activityLog));
}

export function loadTheme() {
    return localStorage.getItem("theme") || "light";
}

export function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

export function loadFocusSessions() {
    return safeNumber(localStorage.getItem("focusSessions"), 0);
}

export function saveFocusSessions(count) {
    localStorage.setItem("focusSessions", count);
}

// Provide a grouped export and global aliases for legacy code that calls
// storage functions without importing. These do not change logic — they
// merely expose the same functions under additional names.
export const storage = {
    loadTasks,
    saveTasks,
    loadNotes,
    saveNotes,
    loadActivityLog,
    saveActivityLog,
    loadTheme,
    saveTheme,
    loadFocusSessions,
    saveFocusSessions,
};

if (typeof window !== "undefined") {
    // Attach as globals for code that expects functions on the window/global scope.
    // This keeps behavior identical while allowing gradual migration to imports.
    window.loadTasks = loadTasks;
    window.saveTasks = saveTasks;
    window.loadNotes = loadNotes;
    window.saveNotes = saveNotes;
    window.loadActivityLog = loadActivityLog;
    window.saveActivityLog = saveActivityLog;
    window.loadTheme = loadTheme;
    window.saveTheme = saveTheme;
    window.loadFocusSessions = loadFocusSessions;
    window.saveFocusSessions = saveFocusSessions;
}