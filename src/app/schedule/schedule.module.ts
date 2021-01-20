import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MonthCalendarComponent } from './componenets/month-calendar/month-calendar.component';
import { WeekCalendarComponent } from './componenets/week-calendar/week-calendar.component';


@NgModule({
  declarations: [ScheduleComponent, CalendarComponent, MonthCalendarComponent, WeekCalendarComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScheduleRoutingModule,
  ]
})
export class ScheduleModule { }
