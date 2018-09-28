import {Component, OnInit} from '@angular/core';
import {Project} from '../projects/Project';
import {AppComponent} from '../app.component';
import {ProjectServiceService} from '../project-service.service';
import {Process} from '../processes/Process';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  constructor(private appComp: AppComponent, private projectService: ProjectServiceService) {
  }
  selectedProject: Project;
  projects;
  ngOnInit() {
    this.projects = this.appComp.displayList();
  }
  displayDetails(poject: Project): void {
    const detail = document.getElementById('projectDetails');
    if (detail.style.display === 'none') {
      detail.style.display = 'block';
    } else {
      detail.style.display = 'none';
    }
  }
  displayButton(): void {
    const button = document.getElementById('button');
    if (button.style.display === 'none') {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
  onSelect(project: Project) {
    this.selectedProject = project;
  }
  add(name: String): void {
    if (!name) {
      return;
    }
    this.projectService.addProject({name} as Project);
  }
}
