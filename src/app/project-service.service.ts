import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '../../node_modules/@angular/common/http';
import {MessageService} from './message.service';
import {Project} from './projects/Project';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private projectUrl = 'http://localhost:8080/getAllProjects';

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  addProject(project: Project): void {
    this.httpClient.get('http://localhost:8080/addProject', {
      params: {
        name: project.name,
        progress: 'test'
      },
    })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(console.log);
  }
}

