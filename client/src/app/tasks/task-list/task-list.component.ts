import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasksOpened: any[] = [
    {name: 'Task1'},
    {name: 'Task2'},
    {name: 'Task3'},
    {name: 'Task4'}
  ];

  tasksInProgress: any[] = [
  ];

  tasksCompleted: any[] = [
  ];
}
