import { openDatabase, STORES } from "./database";
import type { Task } from "../../types/tasks";

export async function saveTasks(tasks: Task[]): Promise<void> {
    const db = await openDatabase();
    const transaction = db.transaction(STORES.tasks, "readwrite");
    const store = transaction.objectStore(STORES.tasks);
    
    return new Promise((resolve, reject) => {
        tasks.forEach((task) => {
            const request = store.put(task);
            request.onerror = () => reject(request.error);
        });
        transaction.oncomplete = () => resolve();
        transaction.onabort = () => reject(transaction.error);
    });
};

export async function loadTasks(): Promise<Task[]> {
    const db = await openDatabase();
    const transaction = db.transaction(STORES.tasks, "readonly");
    const store = transaction.objectStore(STORES.tasks);
    
    return new Promise((resolve, reject) => {
        const request = store.getAll();
        
        request.onsuccess = () => resolve(request.result as Task[]);
        request.onerror = () => reject(request.error);
    });
}

export async function deleteTask(taskId: string): Promise<void> {
    const db = await openDatabase();
    const transaction = db.transaction(STORES.tasks, "readwrite");
    const store = transaction.objectStore(STORES.tasks);
    
    return new Promise((resolve, reject) => {
        const request = store.delete(taskId);
        
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}