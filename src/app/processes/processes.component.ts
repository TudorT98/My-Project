import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {
  processes ;

  constructor(private appComp: AppComponent) {
  }
  ngOnInit() {
    this.processes = this.appComp.displayProcess();
  }
}
