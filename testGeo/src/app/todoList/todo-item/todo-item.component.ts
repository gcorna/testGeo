import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import * as TodoActions from '../state/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() index: number;
  @Input() allOff: boolean;

  @Output() open = new EventEmitter<number>();

  title: string;
  description: string;

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  editTodo() {
    this.store.dispatch(new TodoActions.TogglePanel(this.index));
  }

  togglePriority() {
    this.store.dispatch(new TodoActions.SetPriority(this.index));
  }

  removeTodo() {
    this.store.dispatch(new TodoActions.RemoveTodo(this.index));
  }

  toggleStatus() {
    this.store.dispatch(new TodoActions.SetStatus(this.index));
  }
}
