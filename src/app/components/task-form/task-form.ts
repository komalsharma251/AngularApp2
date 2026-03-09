// Import Angular core modules and reactive forms features
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// Import TaskService to manage tasks
import { TaskService } from '../../services/task';
import { Priority } from '../../models/task.model';

// TaskFormComponent handles adding new tasks via a reactive form
@Component({
  selector: 'app-task-form',  // HTML tag for this component
  standalone: true,           // Can be used directly without a module
  imports: [CommonModule, ReactiveFormsModule], // Dependencies
  templateUrl: './task-form.html', 
  styleUrls: ['./task-form.scss'],
})
export class TaskFormComponent {

  /**
   * Using Angular 14 `inject()` function:
   * - Alternative to constructor injection
   * - Helps with tree-shaking and avoids circular dependency issues
   */
  private fb = inject(FormBuilder);        // FormBuilder for reactive forms
  private taskService = inject(TaskService); // Task service for CRUD operations

  // Reactive form definition
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]], // Task title is required and min 2 chars
    description: [''],                                           // Optional description
    dueDate: [''],                                               // Optional due date
    priority: ['low' as Priority]                                // Default priority
  });

  /**
   * Handles form submission
   */
  onSubmit() {
    // Do nothing if form is invalid
    if (this.form.invalid) return;

    const task = this.form.value;

    // Add new task using the service
    this.taskService.add({
      title: task.title!,                           // Non-null assertion since form is valid
      description: task.description || undefined,  // Optional field
      dueDate: task.dueDate || undefined,          // Optional field
      priority: task.priority ?? 'Low'             // Default to 'Low' if undefined
    });

    // Reset the form to default values
    this.form.reset({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low'
    });
  }
}