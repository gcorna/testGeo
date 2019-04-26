import { Action } from '@ngrx/store';
import { Todo, TodoList } from '../../models';

export enum TodoActionTypes {
    InitializeCurrentTodo = '[Todo] Initialize current Todo',
    AddTodo = '[Todo] Add Todo',
    AddTodoSucces = '[Todo] Add Todo success',
    AddTodoFail = '[Todo] Add Todo fail',
    RemoveTodo = '[Todo] Remove Todo',
    RemoveTodoSucces = '[Todo] Remove Todo success',
    RemoveTodoFail = '[Todo] Remove Todo fail',
    EditTodo = '[Todo] Edit Todo',
    SetPriority = '[Todo] Set Priority',
    SetStatus =  '[Todo] Set Status',
    LoadTodo = '[Todo] Load TodoList',
    LoadTodoFail = '[Todo] Load TodoList Fail',
    LoadTodoSuccess = '[Todo] Load TodoList Succes',
    UpdateTodo = '[Todo] Update TodoList',
    UpdateTodoFail = '[Todo] Update TodoList Fail',
    UpdateTodoSuccess = '[Todo] Update TodoList Success',
    ToggleAddTodo = '[Todo] Toggle Add Todo'
}

export class InitializeCurrentTodo implements Action {
    readonly type = TodoActionTypes.InitializeCurrentTodo;
}

export class AddTodo implements Action {
    readonly type = TodoActionTypes.AddTodo;
    constructor(public payload: Todo) { }
}

export class AddTodoSucces implements Action {
    readonly type = TodoActionTypes.AddTodoSucces;
    constructor(public payload: number) { }
}

export class AddTodoFail implements Action {
    readonly type = TodoActionTypes.AddTodoFail;
    constructor(public payload: number) { }
}

export class RemoveTodo implements Action {
    readonly type = TodoActionTypes.RemoveTodo;
    constructor(public payload: number) { }
}

export class RemoveTodoSucces implements Action {
    readonly type = TodoActionTypes.RemoveTodoSucces;
    constructor(public payload: number) { }
}

export class RemoveTodoFail implements Action {
    readonly type = TodoActionTypes.RemoveTodoFail;
    constructor(public payload: number) { }
}

export class EditTodo implements Action {
    readonly type = TodoActionTypes.EditTodo;
    constructor(public payload: number) { }
}

export class SetPriority implements Action {
    readonly type = TodoActionTypes.SetPriority;
    constructor(public payload: number) { }
}

export class SetStatus implements Action {
    readonly type = TodoActionTypes.SetStatus;
    constructor(public payload: number) { }
}

export class LoadTodo implements Action {
    readonly type = TodoActionTypes.LoadTodo;
}

export class LoadTodoFail implements Action {
    readonly type = TodoActionTypes.LoadTodoFail;
    constructor(public payload: any) { }
}

export class LoadTodoSuccess implements Action {
    readonly type = TodoActionTypes.LoadTodoSuccess;
    constructor(public payload: TodoList) { }
}

export class UpdateTodo implements Action {
    readonly type = TodoActionTypes.UpdateTodo;
}

export class UpdateTodoFail implements Action {
    readonly type = TodoActionTypes.UpdateTodoFail;
    constructor(public payload: any) { }
}

export class UpdateTodoSuccess implements Action {
    readonly type = TodoActionTypes.UpdateTodoSuccess;
    constructor(public payload: Todo) { }
}

export class ToggleAddTodo implements Action {
    readonly type = TodoActionTypes.ToggleAddTodo;
    constructor(public payload: Todo) { }
}

export type Actions
    = AddTodo
    | AddTodoSucces
    | AddTodoFail
    | RemoveTodo
    | RemoveTodoSucces
    | RemoveTodoFail
    | EditTodo
    | SetPriority
    | SetStatus
    | LoadTodo
    | LoadTodoFail
    | LoadTodoSuccess
    | UpdateTodo
    | UpdateTodoFail
    | UpdateTodoSuccess
    | ToggleAddTodo;
