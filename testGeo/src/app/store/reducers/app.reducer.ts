import * as AppActions from '../actions/app.actions';
import { Todo } from 'src/app/models/';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../../state/app.state';

// export interface AppState {
//   currentItemId: number | null;
//   todos: Todo[];
//   error?: string;
// }


// const getTodoListFeatureState = createFeatureSelector<AppState>('todoList');

// export const getCurrentItemId = createSelector(
//   getTodoListFeatureState,
//   state => state.currentItemId
// );

// export const getTodos = createSelector(
//   getTodoListFeatureState,
//   state => state.todos
// );

// export const getError = createSelector(
//   getTodoListFeatureState,
//   state => state.error
// );

export function appReducer(state: State, action: AppActions.Actions): State {

  switch (action.type) {

    case AppActions.TOGGLE_FORM: {
      console.log(action.payload);
      return {...state};
    }
  }
  return state;
}
