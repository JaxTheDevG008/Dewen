import { db } from "./storage";

export async function importData(file: File) {
    const content = await file.text();
    const backup = JSON.parse(content);

    if (
        backup.version !== 1 ||
        !backup.data ||
        !Array.isArray(backup.data.tasks) ||
        !Array.isArray(backup.data.notes) ||
        !Array.isArray(backup.data.activity) ||
        !Array.isArray(backup.data.settings) ||
        !Array.isArray(backup.data.assets) ||
        !Array.isArray(backup.data.meta)
    ) {
        throw new Error("Invalid/unsupported backup file. Womp womp.");
    }

    await db.transaction(
        "rw",
        [
            db.tasks,
            db.notes,
            db.activity,
            db.settings,
            db.assets,
            db.meta
        ],
        async () => {
            await Promise.all([
                db.tasks.clear(),
                db.notes.clear(),
                db.activity.clear(),
                db.settings.clear(),
                db.assets.clear(),
                db.meta.clear()
            ]);

            await Promise.all([
                db.tasks.bulkAdd(backup.data.tasks),
                db.notes.bulkAdd(backup.data.notes),
                db.activity.bulkAdd(backup.data.activity),
                db.settings.bulkAdd(backup.data.settings),
                db.assets.bulkAdd(backup.data.assets),
                db.meta.bulkAdd(backup.data.meta)
            ]);
        }
    );
};