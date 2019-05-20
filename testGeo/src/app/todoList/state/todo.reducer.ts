import * as TodoActions from './todo.actions';
import { Todo } from 'src/app/models/';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';

/**
 * State
 * Definition of the todoList slice of state
 * @export
 * @interface State
 * @extends {fromRoot.State}
 */
export interface State extends fromRoot.State {
  todoList: TodoListState;
}

/**
 * TodoListState
 * Definition of the TodoListState
 * @export
 * @interface TodoListState
 */
export interface TodoListState {
  currentItemId: number | null;
  todoList: Todo[];
  error: string;
  allOf: boolean;
  buttonText: string;
  showPanel: boolean;
}

const initialState: TodoListState = {
  currentItemId: null,
  todoList: [],
  error: '',
  allOf: false,
  buttonText: 'Add',
  showPanel: false
};

/**
 * Definition of slice
 */
const getTodoListFeatureState = createFeatureSelector<TodoListState>('todoList');

/**
 * getCurrentItemId selector
 */
export const getCurrentItemId = createSelector(
  getTodoListFeatureState,
  state => state.currentItemId
);

/**
 * getTodos selector
 */
export const getTodos = createSelector(
  getTodoListFeatureState,
  state => state.todoList
);

/**
 * getError selector
 */
export const getError = createSelector(
  getTodoListFeatureState,
  state => state.error
);

/**
 * getAllOf selector
 */
export const getAllOf = createSelector(
  getTodoListFeatureState,
  state => state.allOf
);

/**
 * getButtonText selector
 */
export const getButtonText = createSelector(
  getTodoListFeatureState,
  state => state.buttonText
);

/**
 * getShowPanel selector
 */
export const getShowPanel = createSelector(
  getTodoListFeatureState,
  state => state.showPanel
);

/**
 * Reducer
 * Reducer for the todolist state
 *
 * @export
 * @param {*} [state=initialState]
 * @param {TodoActions.Actions} action
 * @returns {TodoListState}
 */
export function reducer(state = initialState, action: TodoActions.Actions): TodoListState {

  switch (action.type) {

    /**
     * RemoveTodo
     * payload is the item Id
     */
    case TodoActions.TodoActionTypes.RemoveTodo: {
      const newTodoList = [...state.todoList.slice(0, action.payload), ...state.todoList.slice(action.payload + 1)];
      return {
        ...state,
        todoList: newTodoList,
        currentItemId: null,
        error: ''
      };
    }

    /**
     * SetPriority
     * Increase priority
    */
    case TodoActions.TodoActionTypes.SetPriority: {
      let priority = state.todoList[action.payload].priority;
      priority === 2 ? priority = 0 : priority++;
      const newState = {...state};
      newState.todoList[action.payload].priority = priority;
      return newState;
    }

    /**
     * SetStatus
     * Set status of an item to done and
     * move it down the list if crossed out or on top if uncrossed
    */
    case TodoActions.TodoActionTypes.SetStatus: {
      const newState = {...state};
      newState.todoList[action.payload].status = !newState.todoList[action.payload].status;
      const item = newState.todoList[action.payload];
      const allItem = [...state.todoList.slice(0, action.payload), ...state.todoList.slice(action.payload + 1)];

      if (newState.todoList[action.payload].status === true) {
        newState.todoList = [...allItem, item];
      } else {
        newState.todoList = [item, ...allItem];
      }
      return newState;
    }

    /**
     * LoadTodoSuccess
     *
     */
    case TodoActions.TodoActionTypes.LoadTodoSuccess: {
      return {
        ...state,
        todoList: action.payload,
        error: ''
      };
    }

    /**
     * LoadTodoFail
     */
    case TodoActions.TodoActionTypes.LoadTodoFail: {
      return {
        ...state,
        todoList: [],
        error: action.payload,
      };
    }

    /**
     * CreateTodoSuccess
     */
    case TodoActions.TodoActionTypes.CreateTodoSuccess: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        currentItemId: action.payload.id,
        error: ''
      };
    }

    /**
     * CreateTodoFail
     */
    case TodoActions.TodoActionTypes.CreateTodoFail: {
      return {
        ...state,
        error: action.payload
      };
    }

    /**
     * UpdateTodoSuccess
     */
    case TodoActions.TodoActionTypes.UpdateTodoSuccess: {
      const updatedTodoList = state.todoList.map(
        item => action.payload.id === item.id ? action.payload : item);
      return {
        ...state,
        todoList: updatedTodoList,
        error: ''
      };
    }

    /**
     * UpdateTodoFail
     */
    case TodoActions.TodoActionTypes.UpdateTodoFail: {
      return {
        ...state,
        todoList: state.todoList,
        error: action.payload
      };
    }

    /**
     * TogglePanel
     */
    case TodoActions.TodoActionTypes.TogglePanel: {
      return {
        ...state,
        currentItemId: (action.payload === null) ? null : action.payload,
        error: '',
        allOf: !state.allOf,
        buttonText: (action.payload === null) ? 'Add' : 'Update',
        showPanel: !state.showPanel
      };
    }

    default:
      return state;
  }
}
