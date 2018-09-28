import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProcessesComponent} from './processes/processes.component';
import {TasksComponent} from './tasks/tasks.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {TaskListComponent} from './task-list/task-list.component';
import {ProcessListComponent} from './process-list/process-list.component';
import {ProcessDetailsComponent} from './process-details/process-details.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProcessesComponent,
    TasksComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    TaskListComponent,
    ProcessListComponent,
    ProcessDetailsComponent,
    TaskDetailComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
   // AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
