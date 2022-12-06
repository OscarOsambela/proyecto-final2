import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task1: ITask = {
    title: 'Tarea 1',
    description: 'Descripción 1',
    completed: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: 'Tarea 2',
    description: 'Descripción 2',
    completed: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask){
    alert(`Se procede a eliminar la tarea: ${task.title}`);
  }

}
