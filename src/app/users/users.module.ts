import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EmployeeProfileFormsComponent } from './componenets/employee-profile-forms/employee-profile-forms.component';
import { CustomerProfileFormsComponent } from './componenets/customer-profile-forms/customer-profile-forms.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { CustomerTableComponent } from './componenets/customer-table/customer-table.component';
import { CustomerInfoComponent } from './componenets/customer-info/customer-info.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EmployeeProfileFormsComponent,
    CustomerProfileFormsComponent,
    UserProfileComponent,
    EmployeeProfileComponent,
    UserListComponent,
    EmployeeListComponent,
    CustomerTableComponent,
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports: [UsersComponent, AddUserComponent, EmployeeProfileFormsComponent, CustomerProfileFormsComponent, UsersRoutingModule]
})
export class UsersModule { }
