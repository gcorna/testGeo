import { Component, OnInit, Input } from '@angular/core';
import { TodoList, Todo } from '../../models';
import { Store, select } from '@ngrx/store';
import * as TodoActions from '../state/todo.actions';
import * as fromTodoList from '../state/todo.reducer';

/**
 * TodoListComponent
 *
 * @export
 * @class TodoListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  /**
   * todoList
   * Array of all the todos
   *
   * @type {TodoList}
   * @memberof TodoListComponent
   */
  todoList: TodoList;
  /**
   * showPanel
   * Boolean to control the visibility of the form panel
   *
   * @type {boolean}
   * @memberof TodoListComponent
   */
  showPanel: boolean;
  /**
   * buttonText
   * Content in the submit button of the form
   * value depends of the action add or update todo
   *
   * @type {string}
   * @memberof TodoListComponent
   */
  buttonText: string;
  /**
   * allOff
   * Boolean to desable all the todos
   *
   * @type {boolean}
   * @memberof TodoListComponent
   */
  allOff: boolean;
  /**
   * currentItemId
   * Id of the item currently edited
   *
   * @type {number}
   * @memberof TodoListComponent
   */
  currentItemId: number;

  constructor(private store: Store<fromTodoList.State>) {
    this.store.dispatch( new TodoActions.LoadTodo());
    this.store.pipe(select(fromTodoList.getTodos))
    .subscribe((todoList: TodoList) => this.todoList = todoList);
  }

  /**
   * ngOnInit
   * Initialize the properties
   *
   * @memberof TodoListComponent
   */
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

  /**
   * onRemove
   * Action to delete a todo
   *
   * @param {number} index
   * @memberof TodoListComponent
   */
  onRemove(index: number) {
    this.store.dispatch(new TodoActions.RemoveTodo(index) );
  }

  /**
   * togglePanel
   * Open or close the form panel
   *
   * @memberof TodoListComponent
   */
  togglePanel() {
    this.store.dispatch(new TodoActions.TogglePanel(null) );
  }
}
