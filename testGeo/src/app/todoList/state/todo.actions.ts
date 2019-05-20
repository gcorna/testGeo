import { Action } from '@ngrx/store';
import { Todo, TodoList } from '../../models';

/**
 * TodoActionTypes
 * List of actions
 *
 * @export
 * @enum {number}
 */
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

/**
 * CreateTodo
 * Action for creating a todo in the backend
 *
 * @export
 * @class CreateTodo
 * @implements {Action}
 */
export class CreateTodo implements Action {
    readonly type = TodoActionTypes.CreateTodo;
    constructor(public payload: Todo) { }
}
/**
 * CreateTodoSuccess
 * Action for updating views if creating a todo in the backend is a success
 *
 * @export
 * @class CreateTodoSuccess
 * @implements {Action}
 */
export class CreateTodoSuccess implements Action {
    readonly type = TodoActionTypes.CreateTodoSuccess;
    constructor(public payload: Todo) { }
}
/**
 * CreateTodoFail
 * Action for updating views if creating a todo in the backend failed
 *
 * @export
 * @class CreateTodoFail
 * @implements {Action}
 */
export class CreateTodoFail implements Action {
    readonly type = TodoActionTypes.CreateTodoFail;
    constructor(public payload: any) { }
}
/**
 * RemoveTodo
 * Action for deleting a todo in the backend
 * @export
 * @class RemoveTodo
 * @implements {Action}
 */
export class RemoveTodo implements Action {
    readonly type = TodoActionTypes.RemoveTodo;
    constructor(public payload: number) { }
}
/**
 * RemoveTodoSucces
 * Action for updating views if deleting a todo in the backend succed
 *
 * @export
 * @class RemoveTodoSucces
 * @implements {Action}
 */
export class RemoveTodoSucces implements Action {
    readonly type = TodoActionTypes.RemoveTodoSucces;
    constructor(public payload: number) { }
}
/**
 * RemoveTodoFail
 * Action for updating views if deleting a todo in the backend failed
 * @export
 * @class RemoveTodoFail
 * @implements {Action}
 */
export class RemoveTodoFail implements Action {
    readonly type = TodoActionTypes.RemoveTodoFail;
    constructor(public payload: number) { }
}
/**
 * SetPriority
 * Action to change priority state of a todo
 *
 * @export
 * @class SetPriority
 * @implements {Action}
 */
export class SetPriority implements Action {
    readonly type = TodoActionTypes.SetPriority;
    constructor(public payload: number) { }
}
/**
 * SetStatus
 * Action to change status state of a todo
 *
 * @export
 * @class SetStatus
 * @implements {Action}
 */
export class SetStatus implements Action {
    readonly type = TodoActionTypes.SetStatus;
    constructor(public payload: number) { }
}
/**
 * LoadTodo
 * Action for laoding todos from the backend
 *
 * @export
 * @class LoadTodo
 * @implements {Action}
 */
export class LoadTodo implements Action {
    readonly type = TodoActionTypes.LoadTodo;
}
/**
 * LoadTodoFail
 * Action for updating views if the loading of todos from the backend failed
 * @export
 * @class LoadTodoFail
 * @implements {Action}
 */
export class LoadTodoFail implements Action {
    readonly type = TodoActionTypes.LoadTodoFail;
    constructor(public payload: any) { }
}
/**
 * LoadTodoSuccess
 * Action for updating views if the loading of the todos from the backend succed
 *
 * @export
 * @class LoadTodoSuccess
 * @implements {Action}
 */
export class LoadTodoSuccess implements Action {
    readonly type = TodoActionTypes.LoadTodoSuccess;
    constructor(public payload: TodoList) { }
}
/**
 * UpdateTodo
 * Action for updating a todo in the backend
 *
 * @export
 * @class UpdateTodo
 * @implements {Action}
 */
export class UpdateTodo implements Action {
    readonly type = TodoActionTypes.UpdateTodo;  // Update
    constructor(public payload: Todo) { }
}
/**
 * UpdateTodoFail
 * Action for updating views if an update of backend failed
 *
 * @export
 * @class UpdateTodoFail
 * @implements {Action}
 */
export class UpdateTodoFail implements Action {
    readonly type = TodoActionTypes.UpdateTodoFail;
    constructor(public payload: any) { }
}
/**
 * UpdateTodoSuccess
 * Action for updating views if an update of backend succed
 *
 * @export
 * @class UpdateTodoSuccess
 * @implements {Action}
 */
export class UpdateTodoSuccess implements Action {
    readonly type = TodoActionTypes.UpdateTodoSuccess;
    constructor(public payload: Todo) { }
}
/**
 * TogglePanel
 * Control the visibility of the form panel
 *
 * @export
 * @class TogglePanel
 * @implements {Action}
 */
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
