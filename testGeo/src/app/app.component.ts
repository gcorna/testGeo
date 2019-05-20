import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './state/app.state';
import * as TodoActions from './todoList/state/todo.actions';
import { TodoList } from './models';
import * as fromTodoList from './todoList/state/todo.reducer';

/**
 * AppComponent
 * Principal component
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'testTodo';
  todoList: TodoList;

  constructor( private store: Store<State> ) {}
/**
 * NgOnInit
 * Load the todolist data on initialisation of the app
 *
 * @memberof AppComponent
 */
ngOnInit() {
    this.store.dispatch( new TodoActions.LoadTodo());
    this.store.pipe(select(fromTodoList.getTodos))
    .subscribe((todoList: TodoList) => this.todoList = todoList);
  }
}
