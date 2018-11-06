import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from '../../models';
import { Store } from '@ngrx/store';
import { ADD_TODO } from 'src/app/store/actions/todo.actions';
import * as TodoActions from '../../store/actions/todo.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  @Input() edit: number;
  @Input() remove: number;
  @Input() open: number;
  @Input() priority: number;
  @Input() check: number;

  todoList: Observable<TodoList>;
  showAddTodo: boolean;
  buttonText: string;
  allOff: boolean;

  constructor(private store: Store<AppState>) {
    this.todoList = this.store.select('todoList');
    this.showAddTodo = false;
  }

  ngOnInit() {}

  addTodo() {
    this.store.dispatch({ type: ADD_TODO });
  }

  onRemove(index) {
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
