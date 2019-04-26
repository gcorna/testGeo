import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { CreateComponent } from './create/create.component';

import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material.module';
import { reducer } from './state/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todoList.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    StoreModule.forFeature('todoList', reducer ),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    CreateComponent,
    TodoDetailComponent
  ]
})
export class TodoListModule { }
