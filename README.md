Angular Daily Task Manager

A simple and responsive task management application built with Angular 14+. This project demonstrates standalone components, reactive forms, directives, pipes, and RxJS for state management.

Table of Contents

Project Overview

Features

Technologies Used

Project Structure

Setup & Installation

Usage

Components & Services

Screenshots

Future Improvements

Project Overview

This Angular Task Manager allows users to:

Add, update, and delete tasks

Mark tasks as completed

Filter tasks by status: All, Active, Completed, Overdue

View task statistics (total, active, completed, overdue)

Visualize task priority with color-coded indicators

Truncate long descriptions for a clean UI

Automatically highlight overdue tasks

This project demonstrates clean Angular architecture using standalone components, services for state management, and reusable pipes and directives.

Features

Add Task: Fill out a form to create new tasks with title, description, due date, and priority.

Edit / Toggle Task: Mark tasks as completed or update task details.

Delete / Clear Tasks: Remove single or completed tasks.

Filter Tasks: View tasks by status: active, completed, overdue, or all.

Statistics Panel: Live statistics of tasks.

Custom Pipes & Directives:

DueDateLabelPipe → formats dates and highlights overdue tasks

TruncatePipe → truncates long descriptions

TaskStatusDirective → visually styles tasks by completion and priority

Technologies Used

Angular 14+ (Standalone Components)

RxJS (BehaviorSubjects & Observables)

Reactive Forms

SCSS / CSS for styling

TypeScript

Git & GitHub

Project Structure
src/app/
├── components/
│   ├── task-form/
│   ├── task-list/
│   ├── task-item/
│   └── stats-panel/
├── directives/
│   └── task-status.directive.ts
├── pipes/
│   ├── due-date-label.pipe.ts
│   └── truncate.pipe.ts
├── services/
│   └── task.service.ts
├── models/
│   └── task.model.ts
├── app.html
├── app.scss
└── app.ts
Setup & Installation

Clone the repository

git clone https://github.com/yourusername/AngularApp2.git
cd AngularApp2

Install dependencies

npm install

Run the development server

ng serve

Open http://localhost:4200 in your browser to see the app.

Usage

Fill in the task title, optional description, due date, and priority.

Click Add Task to create a new task.

Use filters to view specific tasks (all, active, completed, overdue).

Toggle completion by clicking on a task, or delete a task using the remove button.

The Stats Panel shows live updates on task counts.

Components & Services
Component / Directive / Pipe	Description
TaskFormComponent	Form for creating new tasks
TaskListComponent	Displays list of tasks with filtering
TaskItemComponent	Represents a single task with actions
StatsPanel	Displays task statistics
TaskStatusDirective	Applies styles based on completion & priority
DueDateLabelPipe	Formats due dates and labels overdue tasks
TruncatePipe	Truncates long text for UI clarity
TaskService	Centralized service for managing task state using RxJS
Screenshots
## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
