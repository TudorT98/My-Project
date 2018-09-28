import { Component, OnInit } from '@angular/core';
import {Task} from '../tasks/Task';
import {TaskService} from '../task.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks ;
  selectedTask: Task;

  constructor(private taskService: TaskService, private appComp: AppComponent) {
  }

  ngOnInit() {
    this.tasks = this.appComp.displayTasks();
  }

  displayDetails(task: Task): void {
    const detail = document.getElementById('Taskdetails');
    if (detail.style.display === 'none') {
      detail.style.display = 'block';
    } else {
      detail.style.display = 'none';
    }
  }

  displayButton(): void {
    const button = document.getElementById('button2');
    if (button.style.display === 'none') {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  onSelect(task: Task) {
    this.selectedTask = task;
  }

  add(name: String): void {
    if (!name) {
      return;
    }
    this.taskService.addTask({name} as Task);

  }
}
