import { Todo } from '../models/todo';

export interface AppState {
  readonly todo: Todo[];
}
