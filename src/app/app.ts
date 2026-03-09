import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskListComponent } from './components/task-list/task-list';
import { StatsPanel } from './components/stats-panel/stats-panel';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFormComponent, TaskListComponent, StatsPanel],
  templateUrl: './app.html',
 //styleUrls: ['./app.scss']
 
})
export class App {
 
}
