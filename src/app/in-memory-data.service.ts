
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Project} from './projects/Project';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {name: 'SAP' , progress: 'In progress'},
      {name: 'Tivo' , progress: 'In progress'},
      {name: 'InternProject' , progress: 'Started'},
    ];
    return {projects};
  }
}
