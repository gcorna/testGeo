import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../../models/todo';

const defaultData: Todo[] = [
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


export function todoReducer ( state: Todo[] = defaultData, action: TodoActions.TodoAction ) {

    console.log(state);

        switch (action.type) {
            case TodoActions.ADD_TODO: {
                return [...state, action.payload];
            }

            // case TodoActions.REMOVE_TODO: {
            //     return [...state, data];
            // }

            // case TodoActions.EDIT_TODO: {
            //     return { ...state, data };
            // }

            // case TodoActions.SET_PRIORITY: {
            //     return {...state, data };
            // }

            // case TodoActions.SET_STATUS: {
            //     return {...state, data };
            // }
        default:
            return state;
        }
}
