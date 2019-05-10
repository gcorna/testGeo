import { Action } from '@ngrx/store';
import { Todo, TodoList } from '../../models';

export enum TodoActionTypes {
    CreateTodo = '[Todo] Create Todo',
    CreateTodoSuccess = '[Todo] Create Todo success',
    CreateTodoFail = '[Todo] Create Todo fail',
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
    TogglePanel = '[Todo] Toggle Panel'
}

export class CreateTodo implements Action {
    readonly type = TodoActionTypes.CreateTodo; // Create
    constructor(public payload: Todo) { }
}

export class CreateTodoSuccess implements Action {
    readonly type = TodoActionTypes.CreateTodoSuccess;
    constructor(public payload: Todo) { }
}

export class CreateTodoFail implements Action {
    readonly type = TodoActionTypes.CreateTodoFail;
    constructor(public payload: any) { }
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
    readonly type = TodoActionTypes.UpdateTodo;  // Update
    constructor(public payload: Todo) { }
}

export class UpdateTodoFail implements Action {
    readonly type = TodoActionTypes.UpdateTodoFail;
    constructor(public payload: any) { }
}

export class UpdateTodoSuccess implements Action {
    readonly type = TodoActionTypes.UpdateTodoSuccess;
    constructor(public payload: Todo) { }
}

export class TogglePanel implements Action {
    readonly type = TodoActionTypes.TogglePanel;
    constructor(public payload: number | null) { }
}

export type Actions
    = CreateTodo
    | CreateTodoSuccess
    | CreateTodoFail
    | RemoveTodo
    | RemoveTodoSucces
    | RemoveTodoFail
    | SetPriority
    | SetStatus
    | LoadTodo
    | LoadTodoFail
    | LoadTodoSuccess
    | UpdateTodo
    | UpdateTodoFail
    | UpdateTodoSuccess
    | TogglePanel;
