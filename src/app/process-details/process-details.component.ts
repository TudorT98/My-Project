import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../projects/Project';
import {Process} from '../processes/Process';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.css']
})
export class ProcessDetailsComponent implements OnInit {

  constructor(private appComp: AppComponent) { }
  @Input() process: Process ;

  ngOnInit() {
  }
  view(): boolean {
    return this.appComp.processView;
  }


}
