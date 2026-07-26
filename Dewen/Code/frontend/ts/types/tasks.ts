type Priority = "Low" | "Medium" | "High" | "None";

type Status = "To Do" | "In Progress" | "Blocked" | "Done";

type Recurrence =
    | "none"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  dueDate: string | null;
  dueTime: string | null;
  status: Status;
  tags: string[];
  createdAt: number;
  recurrence: Recurrence;
  lastCompleted: string | null;
  subtasks: Task[];
}