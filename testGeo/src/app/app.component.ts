import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import * as TodoActions from './store/actions/todo.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'testTodo';

  constructor( private store: Store<AppState> ) {}

  ngOnInit() {
    this.store.dispatch( new TodoActions.LoadTodo() );
  }
}
