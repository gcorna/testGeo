import { Injectable } from '@angular/core';
import { TodoList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DefaultDataService {

  constructor() { }

  public defaultData = [
    {
      id: 0,
      title: 'Go swimming',
      description: 'Don\'t forget speedo.',
      priority: 'red',
      status: false,
    },
    {
      id: 1,
      title: 'Get a medical appointment',
      description: 'Dr Shepard',
      priority: 'orange',
      status: false,
    },
    {
      id: 2,
      title: 'Have a coffe',
      description: 'Find time',
      priority: 'green',
      status: false,
    },
    {
      id: 3,
      title: 'Get the kids',
      description: 'School\'s ending at 5pm',
      priority: 'orange',
      status: true
    },
  ];

  public getDefaultData(): TodoList {
    return this.defaultData;
  }

}
