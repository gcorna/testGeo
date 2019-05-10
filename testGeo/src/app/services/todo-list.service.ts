import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo, TodoList } from '../models';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable( {
  providedIn: 'root'
})
export class TodoListService {

  private baseUrl = 'api/todoList';

  constructor(private http: HttpClient) { }

  /**
   * GetTodoList
   * Retrieve the todoList from backend
   *
   * @returns {Observable<TodoList>}
   * @memberof TodoListService
   */
  getTodoList(): Observable<TodoList> {
    return this.http.get<TodoList>(this.baseUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  /**
   * createTodo
   * Create a todo
   *
   * @param {Todo} todo
   * @returns {Observable<Todo>}
   * @memberof TodoListService
   */
  createTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    todo.id = null;
    console.log(todo);
    return this.http.post<Todo>(this.baseUrl, todo, { headers: headers })
    .pipe(
      tap(data => {
        console.log('createTodo: ' + JSON.stringify(data));

      }),
      catchError(this.handleError)
    );
  }

  /**
   * updateTodo
   * Updates a Todo
   *
   * @param {Todo} todo
   * @returns {Observable<Todo>}
   * @memberof TodoListService
   */
  updateTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Todo>(`${this.baseUrl}/${todo.id}`, todo, { headers: headers })
    .pipe(
      tap(() => console.log('updateTodo: ' + todo.id)),
      // Return the todo on an update
      map(() => todo),
      catchError(this.handleError)
    );
  }

  /**
   * deleteTodo
   * Deletes a Todo
   *
   * @param {number} todoId
   * @returns {Observable<{}>}
   * @memberof TodoListService
   */
  deleteTodo(todoId: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Number>(`${this.baseUrl}/${todoId}`, { headers: headers })
    .pipe(
      tap(data => console.log('deleteTodo: ' + todoId)),
      catchError(this.handleError)
    );
  }

  /**
   * handleError
   * Throw error messages
   *
   * @private
   * @param {*} err
   * @returns
   * @memberof TodoListService
   */
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
