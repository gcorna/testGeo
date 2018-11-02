import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo';

export const REMOVE_TODO = '[Todo] Remove Todo';
export const EDIT_TODO = '[Todo] Edit Todo';
export const SET_PRIORITY = '[Todo] Set Priority';
export const SET_STATUS = '[Todo] Set Status';
export const LOAD_TODO = '[Todo] Load Todo';
export const LOAD_TODO_FAIL = '[Todo] Load Todo Fail';
export const LOAD_TODO_SUCCESS = '[Todo] Load Todo Succes';
export const ADD_TODO = '[Todo] Add Todo';

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;
    constructor(public payload: number) {}
}

export class EditTodo implements Action {
    readonly type = EDIT_TODO;
    constructor(public payload: number) {}
}

export class SetPriority implements Action {
    readonly type = SET_PRIORITY;
    constructor(public payload: number) {}
}

export class SetStatus implements Action {
    readonly type = SET_STATUS;
    constructor(public payload: number) {}
}

export class LoadTodo implements Action {
    readonly type = LOAD_TODO;
}

export class LoadTodoFail implements Action {
    readonly type = LOAD_TODO_FAIL;
    constructor(public payload: any) {}
}

export class LoadTodoSuccess implements Action {
    readonly type = LOAD_TODO_SUCCESS;
    constructor(public payload: Todo) {}
}

export type TodoAction = RemoveTodo | EditTodo | SetPriority | SetStatus | LoadTodo | LoadTodoFail | LoadTodoSuccess | AddTodo;
