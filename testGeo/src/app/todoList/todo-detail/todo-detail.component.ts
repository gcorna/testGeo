import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import * as TodoActions from '../state/todo.actions';
import { Todo, TodoList } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})

export class TodoDetailComponent implements OnInit {

  index: number;
  todo: Todo;

  constructor( private store: Store<State>, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.params.subscribe( params => { this.index = +params['id']; } );
    // this.store.select('todoList').subscribe((data: TodoList) => this.todo = data[this.index]);

  }
}
