import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile-forms',
  templateUrl: './employee-profile-forms.component.html',
  styleUrls: ['./employee-profile-forms.component.css']
})
export class EmployeeProfileFormsComponent implements OnInit {

  @Input() employeeProfile: boolean;
  @Input() customerProfile: boolean;
  @Input() edit: boolean;
  @Input() create: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("submit")
  }
}
