import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Priority } from '../models/task.model';

@Directive({
  selector: '[appTaskStatus]',
  standalone: true
})
export class TaskStatus implements OnChanges {
  @Input() appTaskStatusCompleted: boolean = false;
  @Input() appTaskStatusPriority: Priority = 'Low';

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngOnChanges(_: SimpleChanges): void {
    this.r.setStyle(
      this.el.nativeElement,
      'text-decoration',
      this.appTaskStatusCompleted ? 'line-through' : 'none'
    );

    this.r.setStyle(
      this.el.nativeElement,
      'opacity',
      this.appTaskStatusCompleted ? '0.7' : '1'
    );

    const borderColor = this.priorityColor(this.appTaskStatusPriority);
    this.r.setStyle(this.el.nativeElement, 'border-left', `4px solid ${borderColor}`);
    this.r.setStyle(this.el.nativeElement, 'padding-left', '0.5rem');
  }

  private priorityColor(p: Priority): string {
    switch (p) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'gray';
    }
  }
}