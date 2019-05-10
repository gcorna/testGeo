import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';

import { TodoListService } from '../../services/todo-list.service';
import { TodoList, Todo } from '../../models';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as todoListActions from './todo.actions';

@Injectable()
export class TodoEffects {

  constructor(private todoListService: TodoListService,
              private actions$: Actions) { }

  @Effect()
  loadTodos$: Observable<Action> = this.actions$.pipe(
    ofType(todoListActions.TodoActionTypes.LoadTodo),
    mergeMap((action: todoListActions.LoadTodo)  =>
      this.todoListService.getTodoList().pipe(
        map((todoList: TodoList) => (new todoListActions.LoadTodoSuccess(todoList))),
        catchError(err => of(new todoListActions.LoadTodoFail(err)))
      )
    )
  );

  @Effect()
  updateTodo$: Observable<Action> = this.actions$.pipe(
    ofType(todoListActions.TodoActionTypes.UpdateTodo),
    map((action: todoListActions.UpdateTodo) => action.payload),
    mergeMap((todo: Todo) =>
      this.todoListService.updateTodo(todo).pipe(
        switchMap(updatedTodo => [
          new todoListActions.UpdateTodoSuccess(updatedTodo),
          new todoListActions.TogglePanel(null)
        ]),
        catchError(err => of(new todoListActions.UpdateTodoFail(err)))
      )
    )
  );

  @Effect()
  createTodo$: Observable<Action> = this.actions$.pipe(
    ofType(todoListActions.TodoActionTypes.CreateTodo),
    map((action: todoListActions.CreateTodo) => action.payload),
    mergeMap( (todo: Todo) =>
      this.todoListService.createTodo(todo).pipe(
        switchMap((newTodo: Todo) => [
          new todoListActions.CreateTodoSuccess(newTodo),
          new todoListActions.TogglePanel(null)
        ]),
        tap(() => (new todoListActions.TogglePanel(null))),
        catchError(err => of(new todoListActions.CreateTodoFail(err)))
      )
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType(todoListActions.TodoActionTypes.RemoveTodo),
    map((action: todoListActions.RemoveTodo) => action.payload),
    mergeMap((todoId: number) =>
      this.todoListService.deleteTodo(todoId).pipe(
        map(() => (new todoListActions.RemoveTodoSucces(todoId))),
        catchError(err => of(new todoListActions.RemoveTodoFail(err)))
      )
    )
  );
}
