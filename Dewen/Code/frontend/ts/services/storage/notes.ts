import { openDatabase, STORES } from "./database";
import type { Note } from "../../types/notes";

export async function saveNotes(notes: Note[]): Promise<void> {
    const db = await openDatabase();
    const transaction = db.transaction(STORES.notes, "readwrite");
    const store = transaction.objectStore(STORES.notes);
    
    return new Promise((resolve, reject) => {
        notes.forEach((note) => {
            const request = store.put(note);
            request.onerror = () => reject(request.error);
        });
        transaction.oncomplete = () => resolve();
        transaction.onabort = () => reject(transaction.error);
    });
};

export async function loadNotes(): Promise<Note[]> {
    const db = await openDatabase();
    const transaction = db.transaction(STORES.notes, "readonly");
    const store = transaction.objectStore(STORES.notes);
    
    return new Promise((resolve, reject) => {
        const request = store.getAll();
        
        request.onsuccess = () => resolve(request.result as Note[]);
        request.onerror = () => reject(request.error);
    });
}

export async function deleteNote(noteId: number): Promise<void> {
    const db = await openDatabase();
    const transaction = db.transaction(STORES.notes, "readwrite");
    const store = transaction.objectStore(STORES.notes);
    
    return new Promise((resolve, reject) => {
        const request = store.delete(noteId);
        
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}