import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MonthCalendarComponent } from './componenets/month-calendar/month-calendar.component';
import { WeekCalendarComponent } from './componenets/week-calendar/week-calendar.component';
import { ActivitiesListComponent } from './pages/activities-list/activities-list.component';
import { AddActivitiesComponent } from './pages/add-activities/add-activities.component';
import { ActivitiesTableComponent } from './componenets/activities-table/activities-table.component';
import { ActivitiesFormsComponent } from './componenets/activities-forms/activities-forms.component';


@NgModule({
  declarations: [ScheduleComponent, CalendarComponent, MonthCalendarComponent, WeekCalendarComponent, ActivitiesListComponent, AddActivitiesComponent, ActivitiesTableComponent, ActivitiesFormsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScheduleRoutingModule,
  ]
})
export class ScheduleModule { }
