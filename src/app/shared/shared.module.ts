import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const DECLARABLES = [];

const MODULES = [
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  declarations: [...DECLARABLES],
  imports: [CommonModule, ...MODULES],
  exports: [...DECLARABLES, ...MODULES],
})
export class SharedModule {}