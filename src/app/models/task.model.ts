// task.model.ts
export type Priority = 'Low' | 'Medium' | 'High';

export interface Task {
    id: string; // UUID or unique string identifier
    title: string;
    description?: string;
    dueDate?: string; // ISO string format( '2026-03-5')
    priority: Priority;
    completed: boolean;
    createdAt: string; // ISO string format
    }