import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { UserTableComponent } from './componenets/user-table/user-table.component';
import { UserProfileFormsComponent } from './componenets/user-profile-forms/user-profile-forms.component';
import { UserProfileInfoComponent } from './componenets/user-profile-info/user-profile-info.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EmployeeProfileComponent,
    EmployeeListComponent,
    CustomerProfileComponent,
    CustomerListComponent,
    UserTableComponent,
    UserProfileFormsComponent,
    UserProfileInfoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports: [UsersComponent, AddUserComponent,UsersRoutingModule]
})
export class UsersModule { }
