import * as TodoActions from './todo.actions';
import { Todo } from 'src/app/models/';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
  todoList: TodoListState;
}

export interface TodoListState {
  currentItemId: number | null;
  todoList: Todo[];
  error: string;
}

const initialState: TodoListState = {
  currentItemId: null,
  todoList: [],
  error: ''
};

const getTodoListFeatureState = createFeatureSelector<TodoListState>('todoList');

export const getCurrentItemId = createSelector(
  getTodoListFeatureState,
  state => state.currentItemId
);

export const getTodos = createSelector(
  getTodoListFeatureState,
  state => state.todoList
);

export const getError = createSelector(
  getTodoListFeatureState,
  state => state.error
);

export function reducer(state = initialState, action: TodoActions.Actions): TodoListState {

  switch (action.type) {

    case TodoActions.TodoActionTypes.AddTodo: {
      action.payload.id = state.todoList.length;
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
        currentItemId: action.payload.id,
        error: ''
      };
    }

    case TodoActions.TodoActionTypes.RemoveTodo: {
      const newTodoList = [...state.todoList.slice(0, action.payload), ...state.todoList.slice(action.payload + 1)];
      return {
        ...state,
        todoList: newTodoList,
        currentItemId: null,
        error: ''
      };
    }

    case TodoActions.TodoActionTypes.SetPriority: {
      const newState = {...state};
      const todo = state[action.payload];
      switch (todo.priority) {
        case 'red':
          newState[action.payload].priority = 'green';
          break;
        case 'orange':
          newState[action.payload].priority = 'red';
          break;
        case 'green':
          newState[action.payload].priority = 'orange';
      }
      return newState;
    }

    case TodoActions.TodoActionTypes.SetStatus: { // Move item down the list if crossed out or on top if uncrossed
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

    case TodoActions.TodoActionTypes.LoadTodoSuccess: {
      return {
        ...state,
        todoList: action.payload,
        error: ''
      };
    }

    case TodoActions.TodoActionTypes.LoadTodoFail: {
      return {
        ...state,
        todoList: [],
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
