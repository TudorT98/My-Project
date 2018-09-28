import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects;
  constructor(private appComp: AppComponent) {}
  ngOnInit() {
    this.projects = this.appComp.displayList();
  }

}
