import { Injectable } from '@angular/core';
import {HttpClient} from '../../node_modules/@angular/common/http';
import {MessageService} from './message.service';
import {Process} from './processes/Process';
import {Task} from './tasks/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'http://localhost:8080/taskList'

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  private log(message: string) {
    this.messageService.add(`ProcessService: ${message}`);
  }
  addTask(task: Task): void {
    console.log(task.name);
    this.http.get(this.taskUrl).subscribe(data => {console.log(data);
    });
  }
}

