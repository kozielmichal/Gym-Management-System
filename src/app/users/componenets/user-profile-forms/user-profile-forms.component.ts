import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-forms',
  templateUrl: './user-profile-forms.component.html',
  styleUrls: ['./user-profile-forms.component.css']
})
export class UserProfileFormsComponent implements OnInit {

  @Input() employeeProfile: boolean;
  @Input() customerProfile: boolean;
  @Input() update: boolean;
  @Input() create: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("submit")
  }

}
