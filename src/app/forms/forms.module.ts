import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class FormsModule {}
