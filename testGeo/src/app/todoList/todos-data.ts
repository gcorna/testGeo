import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Todo } from '../models/todo';

export class TodoListData implements InMemoryDbService {

  createDb() {
    const todoList: Todo[] = [
      {
        id: 0,
        title: 'Go swimming',
        description: 'Don\'t forget speedo.',
        priority: 0,
        status: false
      },
      {
        id: 1,
        title: 'Get a medical appointment',
        description: 'Dr Shepard',
        priority: 1,
        status: false
      },
      {
        id: 2,
        title: 'Have a coffee',
        description: 'Find time',
        priority: 2,
        status: false
      },
      {
        id: 3,
        title: 'Get the kids',
        description: 'School\'s ending at 5pm',
        priority: 1,
        status: true
      }
    ];

    return { todoList };
  }
}
