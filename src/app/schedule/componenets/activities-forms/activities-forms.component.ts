import { DatepickerMultipleSelectionComponent } from './../../../shared/components/datepicker-multiple-selection/datepicker-multiple-selection.component';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-activities-forms',
  templateUrl: './activities-forms.component.html',
  styleUrls: ['./activities-forms.component.css']
})
export class ActivitiesFormsComponent implements OnInit {

  @Input() update: boolean;
  @Input() create: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("submit")
  }

}
