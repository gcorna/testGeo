import * as TodoActions from '../actions/todo.actions';
import { Todo } from 'src/app/models/';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';

export interface TodoListState {
  currentItemId: number | null;
  todos: Todo[];
  error?: string;
}

export interface State extends fromRoot.State {
  todoList: TodoListState;
}

const defaultData: TodoListState = {
  currentItemId: null,
  todos: [
    {
      id: 0,
      title: 'Go swimming',
      description: 'Don\'t forget speedo.',
      priority: 'red',
      status: false
    },
    {
      id: 1,
      title: 'Get a medical appointment',
      description: 'Dr Shepard',
      priority: 'orange',
      status: false,
    },
    {
      id: 2,
      title: 'Have a coffee',
      description: 'Find time',
      priority: 'green',
      status: false,
    },
    {
      id: 3,
      title: 'Get the kids',
      description: 'School\'s ending at 5pm',
      priority: 'orange',
      status: true
    }
  ],
  error: ''
};

const getTodoListFeatureState = createFeatureSelector<TodoListState>('todoList');

export const getCurrentItemId = createSelector(
  getTodoListFeatureState,
  state => state.currentItemId
);

export const getTodos = createSelector(
  getTodoListFeatureState,
  state => state.todos
);

export const getError = createSelector(
  getTodoListFeatureState,
  state => state.error
);

export function todoReducer(state: TodoListState = defaultData, action: TodoActions.Actions): TodoListState {

  switch (action.type) {

    case TodoActions.ADD_TODO: {
      console.log(action.payload);
      action.payload.id = state.todos.length;
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        currentItemId: action.payload.id,
        error: ''
      };
    }

    case TodoActions.REMOVE_TODO: {
      const newtodos = [...state.todos.slice(0, action.payload), ...state.todos.slice(action.payload + 1)];
      return {
        ...state,
        todos: newtodos,
        currentItemId: null,
        error: ''
      };
    }

    case TodoActions.SET_PRIORITY: {
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

    case TodoActions.SET_STATUS: { // Move item down the list if crossed out or on top if uncrossed
      const newState = {...state};
      newState.todos[action.payload].status = !newState.todos[action.payload].status;
      const item = newState.todos[action.payload];
      const allItem = [...state.todos.slice(0, action.payload), ...state.todos.slice(action.payload + 1)];

      if (newState.todos[action.payload].status === true) {
        newState.todos = [...allItem, item];
      } else {
        newState.todos = [item, ...allItem];
      }
      return newState;
    }

  }
  return state;
}
