// Import Angular core features
import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Priority } from '../models/task.model';

// Directive to visually style tasks based on completion and priority
@Directive({
  selector: '[appTaskStatus]', // Use as an attribute: <div [appTaskStatus]>
  standalone: true             // Can be used directly in a component without a module
})
export class TaskStatus implements OnChanges {

  // Input to indicate if the task is completed
  @Input() appTaskStatusCompleted: boolean = false;

  // Input to indicate the priority of the task
  @Input() appTaskStatusPriority: Priority = 'Low';

  constructor(
    private el: ElementRef,  // Reference to the host element
    private r: Renderer2     // Renderer for safely manipulating DOM styles
  ) {}

  // Called whenever input properties change
  ngOnChanges(_: SimpleChanges): void {
    // Apply line-through and opacity for completed tasks
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

    // Set border color based on priority
    const borderColor = this.priorityColor(this.appTaskStatusPriority);
    this.r.setStyle(this.el.nativeElement, 'border-left', `4px solid ${borderColor}`);
    this.r.setStyle(this.el.nativeElement, 'padding-left', '0.5rem'); // Ensure spacing for border
  }

  // Helper method to map task priority to a color
  private priorityColor(p: Priority): string {
    switch (p) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'gray'; // fallback color
    }
  }
}