import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '../../node_modules/@angular/common/http';
import {MessageService} from './message.service';
import {Process} from './processes/Process';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private processUrl = 'http://localhost:8080/processList';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  addProcess(process: Process ): void {
    console.log(process.name);
    this.http.get(this.processUrl).subscribe(data => {console.log(data);
    });
}

}
