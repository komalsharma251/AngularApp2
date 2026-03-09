// Import core Angular decorators and modules
import { Component } from '@angular/core';       // Component decorator for defining Angular components
import { CommonModule } from '@angular/common'; // Common directives like *ngIf, *ngFor
import { FormsModule } from '@angular/forms';   // Template-driven forms support

// Import custom components
import { TaskFormComponent } from './components/task-form/task-form'; // Form for adding tasks
import { TaskListComponent } from './components/task-list/task-list'; // Displays list of tasks
import { StatsPanel } from './components/stats-panel/stats-panel';     // Shows task statistics

// Define the root component
@Component({
  selector: 'app-root',      // HTML tag to render this component
  standalone: true,          // Standalone component (doesn’t need NgModule)
  imports: [
    CommonModule,            // Import common Angular directives
    FormsModule,             // Import FormsModule for template-driven forms
    TaskFormComponent,       // Include TaskFormComponent
    TaskListComponent,       // Include TaskListComponent
    StatsPanel               // Include StatsPanel
  ],
  templateUrl: './app.html', // HTML template file for this component
  styleUrls: ['./app.scss']  // SCSS stylesheet for this component
})
export class App {
  // Root component class
  // Currently empty; could include global app logic if needed
}