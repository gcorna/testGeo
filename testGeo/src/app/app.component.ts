import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './state/app.state';
import * as TodoActions from './todoList/state/todo.actions';
import { TodoList } from './models';
import * as fromTodoList from './todoList/state/todo.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'testTodo';
  todoList: TodoList;

  constructor( private store: Store<State> ) {}

  ngOnInit() {
    this.store.dispatch( new TodoActions.LoadTodo());
    this.store.pipe(select(fromTodoList.getTodos))
    .subscribe((todoList: TodoList) => this.todoList = todoList);
  }
}
