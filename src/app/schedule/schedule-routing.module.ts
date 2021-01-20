import { MonthCalendarComponent } from './componenets/month-calendar/month-calendar.component';
import { WeekCalendarComponent } from './componenets/week-calendar/week-calendar.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: 'month-calendar', component: MonthCalendarComponent },
  { path: 'week-calendar', component: WeekCalendarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
