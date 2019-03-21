import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { CreateComponent } from './create/create.component';

import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material/material.module';
import { todoReducer } from '../store/reducers/todo.reducer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    StoreModule.forFeature('todoList', todoReducer ),
    MaterialModule,
  ],
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    CreateComponent,
    TodoDetailComponent
  ]
})
export class TodoListModule { }
