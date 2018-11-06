import { TodoList } from '../models';

export interface AppState {
  readonly todo: TodoList;
  readonly loading?: boolean;
  readonly error?: string;
}
