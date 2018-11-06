// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { switchMap, map } from 'rxjs/operators';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { Action } from '@ngrx/store';
// import * as TodoActions from '../../store/actions/todo.actions';
// import { TodoList } from 'src/app/models/todoList';


// @Injectable()
// export class LoadTodoListEffects {

//   constructor(private actions$: Actions, private http: HttpClient) {}

//   @Effect()
//   LoadTodo$: Observable<Action> = this.actions$.pipe(
//     ofType('LOAD_TODO'),
//     switchMap(() => {
//       return this.http.get<TodoList>('getTodos')
//         .pipe(
//           map((todoList) => {
//             return new TodoActions.LoadTodo();
//           })
//         );
//     })
//   );
// }
