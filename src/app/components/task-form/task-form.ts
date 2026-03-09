//task-form.component.ts

import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Priority } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.scss'],
})
export class TaskFormComponent {
  // Using inject() to get instances of FormBuilder and TaskService added in Angular 14 for better tree-shaking and to avoid issues with circular dependencies.
  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    dueDate: [''],
    priority: ['low' as Priority]
  });

  onSubmit() {

    if (this.form.invalid) return;

    const task = this.form.value;

    this.taskService.add({
      title: task.title!,
      description: task.description || undefined,
      dueDate: task.dueDate || undefined,
      priority: task.priority ?? 'Low'
    });

    this.form.reset({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low'
    });
  }
}