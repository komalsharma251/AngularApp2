// Import Angular core features
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import models, directives, and pipes used in this component
import { Task } from '../../models/task.model';
import { TaskStatus } from '../../directives/task-status';
import { DueDateLabelPipe } from '../../pipes/due-date-label-pipe';
import { TruncatePipe } from '../../pipes/truncate-pipe';

// TaskItem component represents a single task in the list
@Component({
  selector: 'app-task-item',  // HTML tag to render this component
  standalone: true,           // Can be used directly without a module
  imports: [CommonModule, TaskStatus, DueDateLabelPipe, TruncatePipe], // Dependencies
  templateUrl: './task-item.html', 
  styleUrls: ['./task-item.scss'] // Component-specific styles
})
export class TaskItem {

  // Input property: receives a task object from parent component
  @Input({ required: true }) task!: Task;

  // Output event: emitted when the task's completion status is toggled
  @Output() toggle = new EventEmitter<string>();

  // Output event: emitted when the task is removed
  @Output() remove = new EventEmitter<string>();
}