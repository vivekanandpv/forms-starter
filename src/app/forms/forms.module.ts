import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from '../shared/shared.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../login/login.component';
import { ManagerComponent } from '../manager/manager.component';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';
import { UserComponent } from '../user/user.component';
import { AdminGuard } from '../admin.guard';
import { AuthenticatedGuard } from '../authenticated.guard';
import { ManagerGuard } from '../manager.guard';
import { UserGuard } from '../user.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';

@NgModule({
  declarations: [
    TodoComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    UserComponent,
    UnauthorizedComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-IN' },
    AdminGuard,
    AuthenticatedGuard,
    ManagerGuard,
    UserGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class FormsModule {}
