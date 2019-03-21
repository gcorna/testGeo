import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../../models';
import { Store, select } from '@ngrx/store';
import { ADD_TODO } from 'src/app/store/actions/todo.actions';
import * as TodoActions from '../../store/actions/todo.actions';
import { State } from '../../state/app.state';
import * as fromTodoList from '../../store/reducers/todo.reducer';

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

  }

  ngOnInit() {
    this.store.pipe(select(fromTodoList.getTodos)).subscribe(
      todos => { this.todoList = todos; }
      );
  }

  addTodo() {
    this.store.dispatch({ type: ADD_TODO });
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
