import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { TodoListService } from '../../services/todo-list.service';
import { TodoList } from '../../models';

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

//   @Effect()
//   updateTodo$: Observable<Action> = this.actions$.pipe(
//     ofType(todoListActions.UPDATE_TODO),
//     map((action: todoListActions.UpdateTodo) => action.payload),
//     mergeMap((todo: Todo) =>
//       this.todoListService.updateTodo(todo).pipe(
//         map(updatedTodo => (new todoListActions.UpdateTodoSuccess(updatedTodo))),
//         catchError(err => of(new todoListActions.UpdateTodoFail(err)))
//       )
//     )
//   );

  // @Effect()
  // createTodo$: Observable<Action> = this.actions$.pipe(
  //   ofType(todoListActions.ADD_TODO),
  //   map((action: todoListActions.AddTodo) => action.payload),
  //   mergeMap((todo: Todo) =>
  //     this.todoListService.createTodo(todo).pipe(
  //       map((newTodo: Todo) => (new todoListActions.AddTodoSucces(newTodo))),
  //       catchError(err => of(new todoListActions.AddTodoFail(err)))
  //     )
  //   )
  // );

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
