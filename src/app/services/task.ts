// Angular service to manage tasks
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Task as TaskModel, Priority, Task } from '../models/task.model';

@Injectable({
  providedIn: 'root', // Makes this service available app-wide
})
export class TaskService {
  // Internal BehaviorSubject to store the task list
  private readonly tasksSubject = new BehaviorSubject<TaskModel[]>([]);

  // Public observable for components to subscribe to
  readonly tasks$ = this.tasksSubject.asObservable();

  // Derived observable: calculates task stats (total, completed, active, overdue)
  readonly stats$ = this.tasks$.pipe(
    map(tasks => { 
      const total = tasks.length; 
      const completed = tasks.filter(t => t.completed).length; 
      const active = total - completed; 
      const overdue = tasks.filter(t => this.isOverdue(t.dueDate || '') && !t.completed).length;
      return { total, completed, active, overdue }; 
    })
  ); 

  // Add a new task to the list
  add(task: { title: string; description?: string; dueDate?: string; priority: 'Low' | 'Medium' | 'High'; }) {
    const now = new Date().toISOString();
    const newTask: TaskModel = {
      id: this.generateId(),               // Unique task ID
      title: task.title.trim(),            // Trim extra spaces
      description: task.description?.trim(),
      dueDate: task.dueDate?.trim() || undefined,
      priority: task.priority,
      completed: false,                    // New tasks are incomplete by default
      createdAt: now                       // Timestamp for creation
    };
    const next = [...this.tasksSubject.value, newTask]; // Add to current list
    this.tasksSubject.next(next);                        // Emit updated list
  }
  
  // Toggle a task's completed status
  toggleCompleted(id: string) {
    const next = this.tasksSubject.value.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.tasksSubject.next(next);
  }

  // Update a task partially (except id and createdAt)
  update(id: string, patch: Partial<Omit<Task, 'id' | 'createdAt'>>) {
    const next = this.tasksSubject.value.map(t => 
      t.id === id ? { ...t, ...patch } : t
    );
    this.tasksSubject.next(next);
  }

  // Remove a task by ID
  remove(id: string) {
    const next = this.tasksSubject.value.filter(t => t.id !== id);
    this.tasksSubject.next(next);
  }

  // Clear all completed tasks
  clearCompleted() {
    const next = this.tasksSubject.value.filter(t => !t.completed);
    this.tasksSubject.next(next);
  } 

  // Check if a task is overdue
  private isOverdue(due: string): boolean {
    if (!due) return false;               // No due date means not overdue
    const dueDate = new Date(due);
    const today = new Date();
    today.setHours(0, 0, 0, 0);           // Normalize to start of day
    return dueDate < today;                // True if due date is before today
  }

  // Generate a simple unique ID using timestamp + random string
  private generateId(): string {
    return Date.now().toString(36) 
         + Math.random().toString(36).slice(2, 8);
  }
}