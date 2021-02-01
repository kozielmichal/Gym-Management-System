import { AppRoutes } from './../core/constants/app-routs.constants';
import { MonthCalendarComponent } from './componenets/month-calendar/month-calendar.component';
import { WeekCalendarComponent } from './componenets/week-calendar/week-calendar.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { AddActivitiesComponent } from './pages/add-activities/add-activities.component';
import { ActivitiesListComponent } from './pages/activities-list/activities-list.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: AppRoutes.CALENDAR, component: ScheduleComponent },
  { path: AppRoutes.ACTIVITIESLIST, component: ActivitiesListComponent },
  { path: AppRoutes.ADDACTIVITIES, component: AddActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
