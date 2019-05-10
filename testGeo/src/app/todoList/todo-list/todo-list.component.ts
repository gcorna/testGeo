import { Component, OnInit, Input } from '@angular/core';
import { TodoList, Todo } from '../../models';
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
  showPanel: boolean;
  buttonText: string;
  allOff: boolean;
  currentItemId: number;

  constructor(private store: Store<fromTodoList.State>) {
    this.store.dispatch( new TodoActions.LoadTodo());
    this.store.pipe(select(fromTodoList.getTodos))
    .subscribe((todoList: TodoList) => this.todoList = todoList);
  }

  ngOnInit() {
    this.store.pipe(select(fromTodoList.getTodos)).subscribe(
      todos => this.todoList = todos
      );

    this.store.pipe(select(fromTodoList.getAllOf)).subscribe(
      allOf => this.allOff = allOf
    );

    this.store.pipe(select(fromTodoList.getShowPanel)).subscribe(
      showPanel => this.showPanel = showPanel
    );

  }

  addTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.CreateTodo(todo));
  }

  onRemove(index: number) {
    this.store.dispatch(new TodoActions.RemoveTodo(index) );
  }

  onClosePanel() {
    this.allOff = !this.allOff;
    this.showPanel = false;
  }

  openAddTodo() {
    this.store.dispatch(new TodoActions.TogglePanel(null) );
  }

  openToEdit(todoId: number) {
    this.allOff = !this.allOff;
    this.showPanel = true;
    this.buttonText = 'Update';
    this.store.dispatch(new TodoActions.EditTodo(todoId) );
  }
}
