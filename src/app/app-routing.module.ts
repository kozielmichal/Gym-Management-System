import { AppRoutes } from './core/constants/app-routs.constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: AppRoutes.AUTH, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: AppRoutes.HOME, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: AppRoutes.SETTINGS, loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: AppRoutes.USERS, loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: AppRoutes.SCHEDULE, loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
