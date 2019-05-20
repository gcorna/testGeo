import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import * as TodoActions from '../state/todo.actions';

/**
 * TodoItemComponent
 *
 * @export
 * @class TodoItemComponent
 */
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  /**
   * todo
   * Item to display
   *
   * @type {Todo}
   * @memberof TodoItemComponent
   */
  @Input() todo: Todo;
  /**
   * index
   * @type {number}
   * @memberof TodoItemComponent
   */
  @Input() index: number;
  /**
   * allOff
   * Desable all the items of the list
   *
   * @type {boolean}
   * @memberof TodoItemComponent
   */
  @Input() allOff: boolean;

  title: string;
  description: string;
  priority: Array<string> = ['red', 'orange', 'green'];

  constructor(private store: Store<State>) {}

  /**
   * editTodo
   * Dispatch TogglePanel action
   *
   * @memberof TodoItemComponent
   */
  editTodo() {
    this.store.dispatch(new TodoActions.TogglePanel(this.index));
  }

  /**
   * togglePriority
   * Dispatch SetPriority action
   *
   * @memberof TodoItemComponent
   */
  togglePriority() {
    this.store.dispatch(new TodoActions.SetPriority(this.index));
  }

  /**
   * removeTodo
   * Dispatch RemoveTodo action
   *
   * @memberof TodoItemComponent
   */
  removeTodo() {
    this.store.dispatch(new TodoActions.RemoveTodo(this.index));
  }

  /**
   * toggleStatus
   * Dispatch SetStatus action
   *
   * @memberof TodoItemComponent
   */
  toggleStatus() {
    this.store.dispatch(new TodoActions.SetStatus(this.index));
  }
}
