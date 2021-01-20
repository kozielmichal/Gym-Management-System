import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-calendar',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.css']
})
export class WeekCalendarComponent implements OnInit {
  hours = ['6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
  days = [1, 2, 3, 4, 5, 6, 7];
  months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
  calendar = [];
  date = new Date;
  year = this.date.getFullYear();
  month = this.date.getMonth();
  week = 1;
  weekCounts = 4;
  weekDays = [];
  dayinMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
  weekinMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
  monthName;
  constructor() { }
  ngOnInit(): void {
    this.setTitle();
  }

  setTitle() {
    this.daysinWeeks(this.date.getFullYear(), this.date.getMonth() + 1);
    this.setTodayWeek();
    this.monthName = this.weekDays[this.week].week_start + "-" + this.weekDays[this.week].week_end + " " + this.months[this.date.getMonth()] + " " + this.year;
  }

  setTodayWeek() {
    var today = new Date().getDate()
    this.week = this.checkDayOfTheWeek(today);
  }

  checkDayOfTheWeek(day) {
    var weekNumber;
    this.weekDays.every(item => {
      if (day >= item.week_start && day <= item.week_end) {
        weekNumber = item.week
        return false;
      }
      return true;
    })

    return weekNumber - 1
  }

  daysinWeeks(year, month) {
    this.weekDays = [];
    var firstOfMonth = new Date(year, month - 1, 1).getDay();
    if (firstOfMonth === 0) firstOfMonth = 7;
    this.weekCounts = this.weeksCount(year, month);
    var daysinMonth = new Date(year, month, 0).getDate();
    for (var i = 0; i < this.weekCounts; i++)
      if (i === 0)
        this.weekDays.push({ week: i + 1, week_start: 1, week_end: 8 - firstOfMonth });
      else if (i === this.weekCounts - 1)
        this.weekDays.push({ week: i + 1, week_start: 1 + ((8 - firstOfMonth) + ((i - 1) * 7)), week_end: daysinMonth });
      else
        this.weekDays.push({ week: i + 1, week_start: 1 + ((8 - firstOfMonth) + ((i - 1) * 7)), week_end: 7 + ((8 - firstOfMonth) + ((i - 1) * 7)) });
  }

  clickDay(day, hour) {
    if(this.week == 0)
    {
      if(this.weekDays[0].week_end+day - 7 - 1 < 0  )
      {
        day = undefined
      }
      else
        day = this.weekDays[0].week_end+day - 7 ;
    }
    else if (this.week === this.weekCounts-1){
      if(this.weekDays[this.weekCounts-1].week_start+day - 1 > this.weekDays[this.weekCounts-1].week_end  )
      {
        day = undefined
      }
      else
        day = this.weekDays[this.week].week_start + day - 1;
    }
    else
      day = this.weekDays[this.week].week_start + day - 1;
    console.log(day + "-"+ (this.month + 1) + "-"+ this.year+ " "+ hour)
  }


  weeksCount(year, month_number) {
    var firstOfMonth = new Date(year, month_number - 1, 1);
    var day = firstOfMonth.getDay() || 6;
    // console.log(day)
    day = day === 1 ? 0 : day;
    if (day) { day-- }
    var diff = 7 - day;
    var lastOfMonth = new Date(year, month_number, 0);
    var lastDate = lastOfMonth.getDate();
    // console.log(lastOfMonth.getDay())
    if (lastOfMonth.getDay() === 1) {
      diff--;
    }
    var result = Math.ceil((lastDate - diff) / 7);
    return result + 1;
  }

  setDayinMonth = () => {
    this.dayinMonth = new Date(this.year, this.month + 1, 0).getDate();
  }

  setFirstInMonth = () => {
    this.firstDay = new Date(this.year, this.month, 1).getDay();
  }

  setMonthName = () => {
    this.monthName = this.weekDays[this.week].week_start + "-" + this.weekDays[this.week].week_end + " " + this.months[this.month] + " " + this.year
  }

  changeMonth = (up_down, week_month_year) => {
    if (week_month_year == "week") {
      if (up_down == "up") {
        this.week++;
        if (this.week === this.weekCounts) {
          this.month++;
          if (this.month == 12) {
            this.month = 0;
            this.year++;
          }
          this.daysinWeeks(this.year, this.month + 1);
          this.week = 0;
        }
      }
      else if (up_down == "down") {
        this.week--;
        if (this.week === -1) {
          this.month--;
          if (this.month == -1) {
            this.year--;
            this.month = 11;
          }
          this.daysinWeeks(this.year, this.month + 1);
          this.week = this.weekCounts - 1;
        }
      }
    }
    else if (week_month_year == "month") {
      if (up_down == "up") {
        this.month++;
        if (this.month == 12) {
          this.year++
          this.month = 0;
        }
        this.week = 0 ;
      }
      else if (up_down == "down") {
        this.month--;
        if (this.month == -1) {
          this.year--;
          this.month = 11;
        }
        this.week = 0 ;
      }
      else {
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
        this.daysinWeeks(this.year, this.month + 1);
        this.setTodayWeek();
      }
    }
    else if (week_month_year == "year") {
      if (up_down == "up") {
        this.year++;
      }
      else if (up_down == "down") {
        this.year--;
      }
    }
    this.setMonthName();
    this.setDayinMonth();
    this.daysinWeeks(this.year, this.month + 1);
    this.setFirstInMonth();
    // this.changeDate();
  }

  // changeDate = () => {
  //   this.calendar = [];
  //   if (this.firstDay == 0)
  //     this.firstDay = 7;
  //   var start = this.firstDay - 1;
  //   var len = this.dayinMonth;
  //   var day = 1;
  //   var specialMonth = 0;
  //   if (this.year == 2021 && this.month == 1)
  //     specialMonth = 7;

  //   for (var i = 1; i < 36 - specialMonth; i++) {
  //     this.calendar.push("");
  //   }
  //   this.calendar.forEach((item, i) => {
  //     if (i >= start && i < len + start) {
  //       this.calendar[i] = day++;
  //       if (i == 34 && i < len + start) {
  //         for (var x = 1; x < len + start - i; x++)
  //           this.calendar.push(day++);
  //       }
  //     }
  //   })
  // }
}
