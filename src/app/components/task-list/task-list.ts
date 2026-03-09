// task-list.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';

import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItem],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.scss']
})
export class TaskListComponent {
  filter: 'all' | 'active' | 'completed' | 'overdue' = 'all';
  filteredTasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.filteredTasks$ = this.taskService.tasks$;
  }

  applyFilter() {
    this.filteredTasks$ = this.taskService.tasks$.pipe(
      map(tasks => {
        switch (this.filter) {
          case 'active':
            return tasks.filter(t => !t.completed);

          case 'completed':
            return tasks.filter(t => t.completed);

          case 'overdue': {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return tasks.filter(
              t => !!t.dueDate && new Date(t.dueDate) < today && !t.completed
            );
          }

          default:
            return tasks;
        }
      })
    );
  }

  toggle(id: string) {
    this.taskService.toggleCompleted(id);
  }

  remove(id: string) {
    this.taskService.remove(id);
  }

  clearCompleted() {
    this.taskService.clearCompleted();
  }

  trackById = (_: number, t: Task) => t.id;
}