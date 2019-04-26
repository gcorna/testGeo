import { TestBed } from '@angular/core/testing';

import { TodoListData } from './todos-data';

describe('DefaultDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListData = TestBed.get(TodoListData);
    expect(service).toBeTruthy();
  });
});
