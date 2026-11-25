import Dexie, { type Table } from "dexie";

interface DewenDB extends Dexie {
  tasks: Table<any, string>;
  notes: Table<any, string>;
  activity: Table<any, string>;
  settings: Table<any, string>;
  assets: Table<any, string>;
  meta: Table<any, string>;
}

export const db = new Dexie("DewenDB") as DewenDB;

db.version(1).stores({
    tasks: "id",
    notes: "id",
    activity: "id",
    settings: "key",
    assets: "key",
    meta: "key"
});