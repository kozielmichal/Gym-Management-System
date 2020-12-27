import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.css']
})
export class UserProfileInfoComponent implements OnInit {

  private userId :number;
  constructor( private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.userId = parseInt(this.router.snapshot.paramMap.get('id'))
  }

}
