import { db } from "./storage";

export async function exportData() {
    const backup = {
        version: 1,
        createdAt: new Date().toISOString(),
        data: {
            tasks: await db.tasks.toArray(),
            notes: await db.notes.toArray(),
            activity: await db.activity.toArray(),
            settings: await db.settings.toArray(),
            assets: await db.assets.toArray(),
            meta: await db.meta.toArray()
        },
    };

    const blob = new Blob(
        [JSON.stringify(backup, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `dewen_backup_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();

    URL.revokeObjectURL(url);

    localStorage.setItem("lastBackupDate", new Date().toISOString());
}

export function getBackupAge(): number | null {
    const lastBackupDate = localStorage.getItem("lastBackupDate");
    if (!lastBackupDate) return null;

    const elapsed = Date.now() - new Date(lastBackupDate).getTime();
    return Math.floor(elapsed / (1000 * 60 * 60 * 24));
}