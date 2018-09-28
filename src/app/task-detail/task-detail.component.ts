import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../projects/Project';
import {Task} from '../tasks/Task';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor(private appComp: AppComponent) { }
  @Input() task: Task ;

  ngOnInit() {
  }
  view(): boolean {
    return this.appComp.taskView;
  }
}
