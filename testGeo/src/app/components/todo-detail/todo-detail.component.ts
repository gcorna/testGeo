import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as TodoActions from '../../store/actions/todo.actions';
import { Todo, TodoList } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})

export class TodoDetailComponent implements OnInit {

  index: number;
  private sub: any;

  todoList$: Observable<TodoList>;
  todo: Todo;

  constructor( private store: Store<AppState>, private route: ActivatedRoute ) {
    this.sub = this.route.params.subscribe( params => { this.index = +params['id']; } );
    this.todoList$ = this.store.select('todoList');
  }

  ngOnInit() {}

  goToList() {
    this.store.dispatch(new TodoActions.GoToList());
  }
}
