import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../../models';
import { Store, select } from '@ngrx/store';
import * as TodoActions from '../state/todo.actions';
import * as fromTodoList from '../state/todo.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  todoList: TodoList;
  showAddTodo: boolean;
  buttonText: string;
  allOff: boolean;

  constructor(private store: Store<fromTodoList.State>) {
    this.showAddTodo = false;
    this.store.dispatch( new TodoActions.LoadTodo());
    this.store.pipe(select(fromTodoList.getTodos))
    .subscribe((todoList: TodoList) => this.todoList = todoList);
  }

  ngOnInit() {
    this.store.pipe(select(fromTodoList.getTodos)).subscribe(
      todos => this.todoList = todos
      );
  }

  addTodo(todo) {
    this.store.dispatch(new TodoActions.AddTodo(todo));
  }

  onRemove(index: number) {
    this.store.dispatch(new TodoActions.RemoveTodo(index) );
  }

  onClosePanel() {
    this.allOff = !this.allOff;
    this.showAddTodo = false;
  }

  toggleShowAddTodo(action) {
    this.allOff = !this.allOff;
    this.showAddTodo = !this.showAddTodo;
    this.buttonText = action;
  }
}
