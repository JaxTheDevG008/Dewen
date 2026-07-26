export const STORES = {
    tasks: "tasks",
    notes: "notes",
    settings: "settings",
}

export function openDatabase(): Promise<IDBDatabase>  {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("DewenDB", 1);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;

            if (!db.objectStoreNames.contains(STORES.tasks)) {
                db.createObjectStore(STORES.tasks, { keyPath: "id" });
            }
            if (!db.objectStoreNames.contains(STORES.notes)) {
                db.createObjectStore(STORES.notes, { keyPath: "id" });
            }
        };

        request.onsuccess = () => {
            const db = request.result;
            resolve(db);
            console.log("Database opened successfully:", db);
        };

        request.onerror = () => {
            reject(request.error);
            console.error("Error opening database:", request.error);
        };
    });
};