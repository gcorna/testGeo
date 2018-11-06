import * as TodoActions from '../actions/todo.actions';
import { TodoList } from 'src/app/models/todoList';

const defaultData: TodoList = [
  {
    title: 'Go swimming',
    description: 'Don\'t forget speedo.',
    priority: 'red',
    status: false
  },
  {
    title: 'Get a medical appointment',
    description: 'Dr Shepard',
    priority: 'orange',
    status: false,
  },
  {
    title: 'Have a coffe',
    description: 'Find time',
    priority: 'green',
    status: false,
  },
  {
    title: 'Get the kids',
    description: 'School\'s ending at 5pm',
    priority: 'orange',
    status: true
  }
];

export function todoReducer(state: TodoList = defaultData, action: TodoActions.Actions): TodoList {

  switch (action.type) {

    // case TodoActions.LOAD_TODO: {
    //   console.log(action.payload);
    //   return {...state, todoList: action.payload};
    // }

    case TodoActions.ADD_TODO: {
      return [action.payload, ...state];
    }

    case TodoActions.REMOVE_TODO: {
      const newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
      return newState;
    }

    // case TodoActions.TOGGLE_ADD_TODO: {
    //   return {...state, action.payload};
    // }

    // case TodoActions.EDIT_TODO: {
    //   return {...state, action.payload};
    // }

    case TodoActions.SET_PRIORITY: {
      const newState = [...state];
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

    case TodoActions.SET_STATUS: { // Move item down the list if crossed out
      let newState = [...state];
      newState[action.payload].status = !newState[action.payload].status;
      if (newState[action.payload].status === true) {
        const item = newState[action.payload];
        const allItem = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
        newState = [...allItem, item];
      }
      return newState;
    }

    case TodoActions.GO_TO_LIST: {
      window.history.back();
    }

  }
  return state;
}
