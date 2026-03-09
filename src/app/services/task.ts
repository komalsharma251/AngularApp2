import { Injectable } from '@angular/core';
import { BehaviorSubject, map} from 'rxjs';
import { Task as TaskModel, Priority, Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',

})
export class TaskService{
  private readonly tasksSubject = new BehaviorSubject<TaskModel[]>([]);
  readonly tasks$ = this.tasksSubject.asObservable();

  // Dervied observable example: counts and overdue tasks
  readonly stats$ = this.tasks$.pipe(
     map(tasks => { 
      const total = tasks.length; 
      const completed = tasks.filter(t => t.completed).length; 
      const active = total - completed; 
      const overdue = tasks.filter(t => this.isOverdue(t.dueDate || '') && !t.completed).length;
      return { total, completed, active, overdue }; 

    }) 

  ); 
   add(task: { title: string; description?: string; dueDate?: string; priority: 'Low' | 'Medium' | 'High'; }) {
    const now = new Date().toISOString();
    const newTask: TaskModel = {
      //might have to change ID to number 
      id: this.generateId(),
      title: task.title.trim(),
      description: task.description?.trim(),
      dueDate: task.dueDate?.trim() || undefined,
      priority: task.priority,
      completed: false,
      createdAt: now
    };
    const next = [...this.tasksSubject.value, newTask];
    this.tasksSubject.next(next);
  }
  
  toggleCompleted(id: string) {
    const next = this.tasksSubject.value.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.tasksSubject.next(next);
  }
// update task
update(id: string, patch:Partial<Omit<Task, 'id' | 'createdAt'>>) {
  const next = this.tasksSubject.value.map(t => 
    t.id === id ? { ...t, ...patch } : t
  );
  this.tasksSubject.next(next);
}

// remove or delete task
  remove(id: string) {
    const next = this.tasksSubject.value.filter(t => t.id !== id);
    this.tasksSubject.next(next);
  }

//clear completed tasks
clearCompleted() {
  const next = this.tasksSubject.value.filter(t => !t.completed);
  this.tasksSubject.next(next);
} 

// overdue tasks

  private isOverdue(due: string): boolean {
    if (!due) return false;
    const dueDate = new Date(due);
    const today = new Date();
    today.setHours(0,0,0,0);
    return dueDate < today;;
  }
// Simple unique ID generator using timestamp and random number
  private generateId(): string {
    //simple unique ID generator using timestamp and random number
    return (Date.now().toString(36) 
    + Math.random().toString(36).slice(2,8)
    );

  }
}
