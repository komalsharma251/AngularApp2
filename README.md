# Angular Daily Task Manager

![Angular](https://img.shields.io/badge/Angular-14+-DD0031?logo=angular&logoColor=white) ![RxJS](https://img.shields.io/badge/RxJS-7.8.0-FF6D00?logo=rxjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript&logoColor=white) ![License](https://img.shields.io/badge/License-MIT-green)

A modern and responsive **task management application** built with **Angular 14+**, showcasing **standalone components, reactive forms, directives, pipes, and RxJS** for reactive state management.  

---

### Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [Components & Services](#components--services)  
- [Screenshots](#screenshots)    
- [License](#license)  

---

### Project Overview

Angular Task Manager lets users:

- Add, update, and delete tasks  
- Mark tasks as completed  
- Filter tasks by status: **All**, **Active**, **Completed**, **Overdue**  
- View task statistics (total, active, completed, overdue)  
- Visualize task priority with color-coded indicators  
- Truncate long descriptions for a clean UI  
- Automatically highlight overdue tasks  

It demonstrates a **clean architecture** with standalone components, centralized services, reusable pipes, and directives.  

---

### Features

- **Add Task:** Create new tasks with title, description, due date, and priority  
- **Edit / Toggle Task:** Update completion status easily  
- **Delete / Clear Tasks:** Remove single or completed tasks  
- **Filter Tasks:** Filter by active, completed, overdue, or all tasks  
- **Statistics Panel:** Displays live task statistics  
- **Custom Pipes & Directives:**  
  - `DueDateLabelPipe` → formats dates and labels overdue tasks  
  - `TruncatePipe` → truncates long descriptions  
  - `TaskStatusDirective` → visually styles tasks by completion & priority  

---

### Technologies Used

- **Angular 14+** (Standalone Components)  
- **RxJS** (BehaviorSubjects & Observables)  
- **Reactive Forms**  
- **SCSS / CSS** for styling  
- **TypeScript**  
- **Git & GitHub**  

---

### Project Structure

```bash
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

Open http://localhost:4200 in your browser to view the app.

Usage

Enter the task title, optional description, due date, and priority.

Click Add Task to create a new task.

Use filters to view tasks by status (all, active, completed, overdue).

Toggle task completion by clicking on the task, or remove a task using the delete button.

Stats Panel displays live task counts.

Components & Services
Component / Directive / Pipe	Description
TaskFormComponent	Handles task creation form
TaskListComponent	Displays list of tasks with filters
TaskItemComponent	Represents a single task item
StatsPanel	Shows task statistics
TaskStatusDirective	Styles tasks by completion & priority
DueDateLabelPipe	Formats due dates, labels overdue tasks
TruncatePipe	Truncates long task descriptions
TaskService	Manages task state using RxJS
Screenshots

![Task Form](./public/assets/image1.png)
![Fill Task Form](./public/assets/image2.png)
![Task Added](./public/assets/image3.png)
![Displaying Tasks](./public/assets/image4.png)
![Completed Task](./public/assets/image5.png)
![Overdue Task](./public/assets/image6.png)
![Active Task](./public/assets/image7.png)
![All Three Task](./public/assets/image8.png)







