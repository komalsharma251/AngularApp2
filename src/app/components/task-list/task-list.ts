// Import Angular core modules and RxJS operators
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';

// Import TaskService and models
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';
import { TaskItem } from '../task-item/task-item';

// TaskListComponent displays and manages a list of tasks
@Component({
  selector: 'app-task-list',  // HTML tag to render this component
  standalone: true,           // Can be used without a module
  imports: [CommonModule, FormsModule, TaskItem], // Modules and child component
  templateUrl: './task-list.html', 
  styleUrls: ['./task-list.scss']
})
export class TaskListComponent {

  // Current filter state: 'all', 'active', 'completed', or 'overdue'
  filter: 'all' | 'active' | 'completed' | 'overdue' = 'all';

  // Observable of tasks after applying the filter
  filteredTasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    // Initialize filteredTasks$ with the full task list
    this.filteredTasks$ = this.taskService.tasks$;
  }

  /**
   * Apply the selected filter to the tasks
   */
  applyFilter() {
    this.filteredTasks$ = this.taskService.tasks$.pipe(
      map(tasks => {
        switch (this.filter) {

          case 'active':   // Show only incomplete tasks
            return tasks.filter(t => !t.completed);

          case 'completed': // Show only completed tasks
            return tasks.filter(t => t.completed);

          case 'overdue': { // Show tasks with due date in the past that are not completed
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Normalize to start of day
            return tasks.filter(
              t => !!t.dueDate && new Date(t.dueDate) < today && !t.completed
            );
          }

          default:          // Show all tasks
            return tasks;
        }
      })
    );
  }

  /**
   * Toggle a task's completed status
   * @param id - Task ID
   */
  toggle(id: string) {
    this.taskService.toggleCompleted(id);
  }

  /**
   * Remove a task by ID
   * @param id - Task ID
   */
  remove(id: string) {
    this.taskService.remove(id);
  }

  /**
   * Clear all completed tasks
   */
  clearCompleted() {
    this.taskService.clearCompleted();
  }

  /**
   * TrackBy function for ngFor to optimize rendering
   * @param _ - index (not used)
   * @param t - task object
   * @returns task id
   */
  trackById = (_: number, t: Task) => t.id;
}