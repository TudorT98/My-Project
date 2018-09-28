import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../projects/Project';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private appComp: AppComponent) {}
  @Input() project: Project ;

  ngOnInit() {
  }
  view(): boolean {
    return this.appComp.projectView;
  }
}
