// Define the allowed priority levels for a task
export type Priority = 'Low' | 'Medium' | 'High';

// Task interface representing a single task object
export interface Task {
    id: string;          // Unique identifier for the task (UUID or custom string)
    title: string;       // Task title or name
    description?: string; // Optional task description
    dueDate?: string;    // Optional due date in ISO string format (e.g., '2026-03-05')
    priority: Priority;  // Task priority, restricted to 'Low', 'Medium', or 'High'
    completed: boolean;  // Indicates whether the task is completed
    createdAt: string;   // Timestamp when the task was created (ISO string format)
}