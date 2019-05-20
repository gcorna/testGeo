import { Component, OnInit, OnDestroy } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { State } from '../../state/app.state';
import * as TodoActions from '../state/todo.actions';
import * as fromTodoList from '../state/todo.reducer';
import { Todo } from 'src/app/models';

/**
 * Animation for the edit form
 */
const FADEIN_ANIMATION = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ])
]);

/**
 * Create component
 * Handle the form to edit or create a todo
 *
 * @export
 * @class CreateComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-create',
  animations: [FADEIN_ANIMATION],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  buttonText: string;
  currentItemId: number;
  title: string;
  description: string;
  todoForm: FormGroup;
  componentActive = true;
  todo: Todo;

  constructor(private store: Store<State>, public snackBar: MatSnackBar, private fb: FormBuilder) { }

  /**
   * ngOnInit
   * Update the form data
   * Create the formgroup
   *
   * @memberof CreateComponent
   */
  ngOnInit(): void {

    this.store.pipe(select(fromTodoList.getButtonText)).subscribe(
      text => this.buttonText = text
      );

    this.store.pipe(select(fromTodoList.getCurrentItemId)).subscribe(
      itemId => {
        this.currentItemId = itemId;
        if (itemId !== null) {
          this.store.pipe(select(fromTodoList.getTodos)).subscribe(
            todos => {
              this.todo = todos[itemId];
              this.title = this.todo !== undefined ? todos[itemId].title : '';
              this.description = this.todo !== undefined ? todos[itemId].description : '';
            }
          );
        }
      }
    );

    this.todoForm = this.fb.group({
      id: [this.currentItemId],
      title: [this.title],
      description: [this.description]
    });
  }

  /**
   * onDestroy
   * Destroy the component

   * @memberof CreateComponent
   */
  ngOnDestroy(): void {
    this.componentActive = false;
  }

  /**
   * AddTodo
   * Dispatch actions create or update
   * or throw error message if the form is not valid
   *
   * @memberof CreateComponent
   */
  addTodo(): void {
    if (this.todoForm.value.title !== null) {

      const newTodo = {...this.todo, ...this.todoForm.value};
      newTodo.status = false;
      newTodo.priority = 0;

      if (this.todoForm.value.id === null) {
        this.store.dispatch(new TodoActions.CreateTodo(newTodo));
      } else {
        this.store.dispatch(new TodoActions.UpdateTodo(newTodo));
      }

    } else {
      this.snackBar.open('Title cannot be empty !', '', {duration: 2000, verticalPosition: 'top' });
    }
  }

}
