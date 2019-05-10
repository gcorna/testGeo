import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import { Todo } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { TodoListState } from '../state/todo.reducer';

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
    this.store.select('todoList').subscribe((todoList: TodoListState) => this.todo = todoList.todoList[this.index]);
  }
}
