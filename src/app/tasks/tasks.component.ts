import { Component, OnInit } from '@angular/core';
import {Task} from './Task';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  constructor(private appComp: AppComponent) {
  }

  ngOnInit() {
    this.tasks = this.appComp.displayTasks();
  }
}


