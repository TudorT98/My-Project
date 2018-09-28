import { Component, OnInit } from '@angular/core';
import {Process} from '../processes/Process';
import {Project} from '../projects/Project';
import {ProcessService} from '../process.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {
  selectedProcess: Process;
  processes;

  constructor(private processService: ProcessService, private appComp: AppComponent) {
  }

  ngOnInit() {
   this.processes = this.appComp.displayProcess();
  }

  displayDetails(process: Process): void {
    const processDetail = document.getElementById('Processdetails');
    if (processDetail.style.display === 'none') {
      processDetail.style.display = 'block';
    } else {
      processDetail.style.display = 'none';
    }
  }

  displayButton(): void {
    const button = document.getElementById('button3');
    if (button.style.display === 'none') {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  onSelect(process: Process) {
    this.selectedProcess = process;
  }

  add(name: String): void {
    if (!name) {
      return;
    }
    this.processService.addProcess({name} as Process);
  }
}
