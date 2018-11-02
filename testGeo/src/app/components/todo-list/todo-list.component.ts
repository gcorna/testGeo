import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todoList = this.store.select('todo');
  }

  ngOnInit() {
  }

}
