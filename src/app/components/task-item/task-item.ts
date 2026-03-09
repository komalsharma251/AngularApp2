import { Component, EventEmitter,Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskStatus } from '../../directives/task-status';
import { DueDateLabelPipe } from '../../pipes/due-date-label-pipe';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, TaskStatus, DueDateLabelPipe, TruncatePipe],
  templateUrl: './task-item.html',
  //styleUrl: './task-item.scss',
  styleUrls: ['./task-item.scss']
})
export class TaskItem {
  @Input({required: true}) task!: Task;
  @Output() toggle= new EventEmitter<string>();
  @Output() remove= new EventEmitter<string>();

}
