import {Component} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private projectsUrl = 'http://localhost:8080/getAllProjects';
  private processUrl = 'http://localhost:8080/processList';
  private taskUrl = 'http://localhost:8080/taskList';
  projects;
  processes;
  tasks;
  projectView = false;
  processView = false;
  taskView = false;

  constructor(private http: HttpClient) {
    this.http.get(this.projectsUrl).subscribe(data => {
      this.projects = data;
    });
    this.http.get(this.processUrl).subscribe(data => {
      this.processes = data;
    });
    this.http.get(this.taskUrl).subscribe(data => {
      this.tasks = data;
    });
  }

  displayList(): void {
    return this.projects;
  }

  displayProcess(): void {
    return this.processes;
  }

  displayTasks(): void {
    return this.tasks;
  }

  showProjectList(): void {
    const listProj = document.getElementById('ListComp');
    if (listProj.style.display === 'none') {
      listProj.style.display = 'block';
    } else {
      listProj.style.display = 'none';
    }
  }

  showProcessList(): void {
    const listProc = document.getElementById('ListComp2');
    if (listProc.style.display === 'none') {
      listProc.style.display = 'block';
    } else {
      listProc.style.display = 'none';
    }
  }

  showTasksList(): void {
    const listTasks = document.getElementById('ListComp3');
    if (listTasks.style.display === 'none') {
      listTasks.style.display = 'block';
    } else {
      listTasks.style.display = 'none';
    }
  }
  selectProjectView(): void {
    if (this.projectView === true) {
      this.projectView = false;
    } else {
      this.projectView = true;
    }
  }
  selectProcessView(): void {
    if (this.processView === true) {
      this.processView = false;
    } else {
      this.processView = true;
    }
  }
  selectTaskView(): void {
    if (this.taskView === true) {
      this.taskView = false;
    } else {
      this.taskView = true;
    }
  }
}



