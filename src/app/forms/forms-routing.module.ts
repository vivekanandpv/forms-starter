import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { AdminComponent } from '../admin/admin.component';
import { AuthenticatedGuard } from '../authenticated.guard';
import { LoginComponent } from '../login/login.component';
import { ManagerGuard } from '../manager.guard';
import { ManagerComponent } from '../manager/manager.component';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';
import { UserGuard } from '../user.guard';
import { UserComponent } from '../user/user.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [ManagerGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
