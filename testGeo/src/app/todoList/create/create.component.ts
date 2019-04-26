import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import * as TodoActions from '../state/todo.actions';

export const FADEIN_ANIMATION = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ])
]);

@Component({
  selector: 'app-create',
  animations: [FADEIN_ANIMATION],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() buttonText: string;

  @Output() closePanel = new EventEmitter<boolean>();

  constructor(private store: Store<State>, public snackBar: MatSnackBar) { }

  addTodo(title: string, description: string) {
    if (title !== '') {
      this.store.dispatch(new TodoActions.AddTodo({ id: null, title: title, description: description, priority: 'green', status: false }));
      this.closePanel.emit(false);
    } else {
      this.snackBar.open('Title cannot be empty !', '', {duration: 2000, verticalPosition: 'top' });
    }
  }

  ngOnInit() {}

}
