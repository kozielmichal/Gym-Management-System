import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.css']
})
export class MonthCalendarComponent implements OnInit {

  calendar = []
  date = new Date
  year = this.date.getFullYear()
  month = this.date.getMonth()
  dayinMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
  months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
  monthName = this.months[this.date.getMonth()] + " " + this.year

  constructor(public dialog: MatDialog) {
    this.changeDate()
  }
  ngOnInit(): void {
  }

  public openNoteDialog = (obj) => {
    console.log(obj)
    // obj = new Date(this.year , this.month , obj)
    // console.log(obj)
    // let dialogRef = this.dialog.open(, {
    //   data: obj
    // });
    // dialogRef.afterClosed().subscribe(result => {

    // })
  }

  setDayinMonth = () => {
    this.dayinMonth = new Date(this.year, this.month + 1, 0).getDate();
  }

  setFirstInMonth = () => {
    this.firstDay = new Date(this.year, this.month, 1).getDay();
  }

  setMonthName = () => {
    this.monthName = this.months[this.month] + " " + this.year
  }

  changeMonth = (up_down, month_year) => {
    if (month_year == "month") {
      if (up_down == "up") {
        this.month++;
        if (this.month == 12) {
          this.year++
          this.month = 0;
        }
      }
      else if (up_down == "down") {
        this.month--;
        if (this.month == -1) {
          this.year--
          this.month = 11;
        }
      }
      else {
        this.month = this.date.getMonth()
        this.year = this.date.getFullYear()
      }
    }
    else if (month_year == "year") {
      if (up_down == "up") {
        this.year++
      }
      else if (up_down == "down") {
        this.year--;
      }
    }
    this.setMonthName();
    this.setDayinMonth();
    this.setFirstInMonth();
    this.changeDate()
  }

  changeDate = () => {
    this.calendar = []
    if (this.firstDay == 0)
      this.firstDay = 7
    var start = this.firstDay - 1
    var len = this.dayinMonth
    var day = 1;
    var specialMonth = 0
    if (this.year == 2021 && this.month == 1)
      specialMonth = 7

    for (var i = 1; i < 36 - specialMonth; i++) {
      this.calendar.push("")
    }
    this.calendar.forEach((item, i) => {
      if (i >= start && i < len + start) {
        this.calendar[i] = day++
        if (i == 34 && i < len + start) {
          for (var x = 1; x < len + start - i; x++)
            this.calendar.push(day++)
        }
      }
    })
  }
}
