import { Component, OnInit } from '@angular/core';
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
  todo: Todo;

  constructor( private store: Store<AppState>, private route: ActivatedRoute ) {
    this.route.params.subscribe( params => { this.index = +params['id']; } );
    this.store.select('todoList').subscribe((data: TodoList) => this.todo = data[this.index]);
  }

  ngOnInit() {}

  goToList() {
    this.store.dispatch(new TodoActions.GoToList());
  }
}
