import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-multiple-selection',
  templateUrl: './datepicker-multiple-selection.component.html',
  styleUrls: ['./datepicker-multiple-selection.component.css']
})
export class DatepickerMultipleSelectionComponent  {

  @Input() text ;
  public CLOSE_ON_SELECTED = false;
  public init = new Date();
  public resetModel = new Date(0);
  public model = [

  ];
  @ViewChild('picker', { static: true }) _picker: MatDatepicker<Date>;

  public dateClass = (date: Date) => {
    if (this._findDate(date) !== -1) {
      return [ 'selected' ];
    }
    return [ ];
  }

  public dateChanged(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      const date = event.value;
      const index = this._findDate(date);
      if (index === -1) {
        this.model.push(date);
      } else {
        this.model.splice(index, 1)
      }
      this.resetModel = new Date(0);
      if (!this.CLOSE_ON_SELECTED) {
        const closeFn = this._picker.close;
        this._picker.close = () => { };
        this._picker['_popupComponentRef'].instance._calendar.monthView._createWeekCells()
        setTimeout(() => {
          this._picker.close = closeFn;
        });
      }
    }
  }

  public remove(date: Date): void {
    const index = this._findDate(date);
    this.model.splice(index, 1)
  }

  private _findDate(date: Date): number {
    return this.model.map((m) => +m).indexOf(+date);
  }

}
