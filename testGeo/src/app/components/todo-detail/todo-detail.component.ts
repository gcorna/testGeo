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
  state: TodoList;

  todoList$: Observable<TodoList>;
  todo: Todo;

  constructor( private store: Store<AppState>, private route: ActivatedRoute ) {
    this.sub = this.route.params.subscribe( params => { this.index = +params['id']; } );
    this.store.select('todoList').subscribe((data: TodoList) => this.state = data);
    this.todo = this.state[this.index];
    console.log(this.todo);
  }

  ngOnInit() {}

  goToList() {
    this.store.dispatch(new TodoActions.GoToList());
  }
}
