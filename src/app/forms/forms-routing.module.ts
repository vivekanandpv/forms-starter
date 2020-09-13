import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../login/login.component';
import { ManagerComponent } from '../manager/manager.component';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';
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
  },
  {
    path: 'manager',
    component: ManagerComponent,
  },
  {
    path: 'user',
    component: UserComponent,
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
