import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from '../rest.service';

const DECLARABLES = [];

const MODULES = [
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatNativeDateModule,
  HttpClientModule,
];

@NgModule({
  declarations: [...DECLARABLES],
  imports: [CommonModule, ...MODULES],
  providers: [RestService],
  exports: [...DECLARABLES, ...MODULES],
})
export class SharedModule {}
