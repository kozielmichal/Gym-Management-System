import { AppRoutes } from './../core/constants/app-routs.constants';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: AppRoutes.EMPLOYEELIST, component: EmployeeListComponent },
  { path: AppRoutes.CUSTOMERLIST, component: CustomerListComponent },
  { path: AppRoutes.ADDUSER, component: AddUserComponent },
  { path: AppRoutes.EMPLOYEELIST +"/"+AppRoutes.EMPLOYEEINFO+'/:id', component:EmployeeProfileComponent },
  { path: AppRoutes.CUSTOMERLIST +"/"+AppRoutes.CUSTOMERINFO+'/:id', component:CustomerProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
