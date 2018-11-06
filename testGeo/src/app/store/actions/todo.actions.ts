import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo';


export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';
export const EDIT_TODO = '[Todo] Edit Todo';
export const SET_PRIORITY = '[Todo] Set Priority';
export const SET_STATUS = '[Todo] Set Status';
export const LOAD_TODO = '[Todo] Load TodoList';
export const LOAD_TODO_FAIL = '[Todo] Load TodoList Fail';
export const LOAD_TODO_SUCCESS = '[Todo] Load TodoList Succes';
export const TOGGLE_ADD_TODO = '[Todo] Toggle Add Todo';
export const GO_TO_LIST = '[Todo] Go To TodoList';

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: Todo) { }
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;
    constructor(public payload: number) { }
}

export class EditTodo implements Action {
    readonly type = EDIT_TODO;
    constructor(public payload: number) { }
}

export class SetPriority implements Action {
    readonly type = SET_PRIORITY;
    constructor(public payload: number) { }
}

export class SetStatus implements Action {
    readonly type = SET_STATUS;
    constructor(public payload: number) { }
}

export class LoadTodo implements Action {
    readonly type = LOAD_TODO;
}

export class LoadTodoFail implements Action {
    readonly type = LOAD_TODO_FAIL;
    constructor(public payload: any) { }
}

export class LoadTodoSuccess implements Action {
    readonly type = LOAD_TODO_SUCCESS;
    constructor(public payload: Todo) { }
}

export class ToggleAddTodo implements Action {
    readonly type = TOGGLE_ADD_TODO;
    constructor(public payload: Todo) { }
}

export class GoToList implements Action {
    readonly type = GO_TO_LIST;

}

export type Actions
    = AddTodo
    | RemoveTodo
    | EditTodo
    | SetPriority
    | SetStatus
    | LoadTodo
    | LoadTodoFail
    | LoadTodoSuccess
    | ToggleAddTodo
    | GoToList;
