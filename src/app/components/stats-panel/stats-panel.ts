// Import Angular core modules and RxJS utilities
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

// Import the TaskService to get task statistics
import { TaskService } from '../../services/task';

// StatsPanel component displays statistics about tasks (total, active, completed, overdue)
@Component({
  selector: 'app-stats-panel',    // HTML tag to render this component
  standalone: true,               // Can be used directly without a module
  imports: [CommonModule],        // Common Angular directives (ngIf, ngFor, etc.)
  templateUrl: './stats-panel.html',
  styleUrl: './stats-panel.scss'  // Component-specific styles
})
export class StatsPanel implements OnInit, OnDestroy {

  // Stats object to hold task statistics
  stats = { total: 0, active: 0, completed: 0, overdue: 0 };

  // Subject used to unsubscribe from observables to prevent memory leaks
  private destroy$ = new Subject<void>();

  constructor(private taskService: TaskService) {}

  /**
   * Subscribe to the stats$ observable from TaskService
   * Updates the stats whenever tasks change
   */
  ngOnInit(): void {
    this.taskService.stats$
      .pipe(takeUntil(this.destroy$))  // Automatically unsubscribe on destroy
      .subscribe(stats => this.stats = stats);
  }

  /**
   * Cleanup subscription when component is destroyed
   */
  ngOnDestroy(): void {
    this.destroy$.next();    // Emit to trigger unsubscription
    this.destroy$.complete(); // Complete the destroy$ subject
  }
}