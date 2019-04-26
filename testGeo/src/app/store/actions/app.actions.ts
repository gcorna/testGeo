import { Action } from '@ngrx/store';

export const TOGGLE_FORM = '[App] Open or Close edit form';

export class ToggleForm implements Action {
    readonly type = TOGGLE_FORM;
    constructor(public payload: Boolean) { }
}

export type Actions = ToggleForm;
