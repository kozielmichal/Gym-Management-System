import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AppRoutes } from '../../constants/app-routs.constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public showUsersMenu = false;
  public showContractMenu = false;
  public showCalendarMenu = false;
  public sideNavHiddenVisibility = true;
  @ViewChild(MatSidenav) drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
  }

  navigateHome() {
    this.router.navigate(["/" + AppRoutes.HOME]);
  }
  navigateEmploeeList() {
    this.router.navigate(["/" + AppRoutes.USERS + "/" +AppRoutes.EMPLOYEELIST])
  }

  navigateUsersList() {
    this.router.navigate(["/" + AppRoutes.USERS + "/" +AppRoutes.CUSTOMERLIST])
  }
  navigateAddUser() {
    this.router.navigate(["/" + AppRoutes.USERS +"/" + AppRoutes.ADDUSER])
  }

  navigateEmployeeContract() {
    // this.router.navigate(["/" + AppRoutes.PRESENCELIST])
  }

  navigateUserContract() {
    // this.router.navigate(["/" + AppRoutes.ABSENCE])
  }

  navigateCalendar() {
    // this.router.navigate(["/" + AppRoutes.RFID])
  }

  navigateFitnessActivity() {
    // this.router.navigate(["/" + AppRoutes.RFID])
  }

  navigateAddFitnessActivity() {
    // this.router.navigate(["/" + AppRoutes.RFID])
  }
  navigateSettings() {
    this.router.navigate(["/" + AppRoutes.SETTINGS])
  }

  onSideNavClick(drawer) {
    drawer.toggle();
    this.sideNavHiddenVisibility = !this.sideNavHiddenVisibility;
    if (!this.sideNavHiddenVisibility) {
      this.showUsersMenu = false;
      this.showContractMenu = false;
      this.showCalendarMenu = false;
    }
  }

  onEmployeeIconClick(menuTrigger) {
    if (this.sideNavHiddenVisibility)
      this.showUsersMenu = !this.showUsersMenu;
    if (!this.sideNavHiddenVisibility)
      menuTrigger.openMenu();
  }

  onPresentIconClick(menuTrigger) {
    if (this.sideNavHiddenVisibility)
      this.showContractMenu = !this.showContractMenu
    if (!this.sideNavHiddenVisibility)
      menuTrigger.openMenu();
  }

  onSheduleIconClick(menuTrigger) {
    if (this.sideNavHiddenVisibility)
      this.showCalendarMenu = !this.showCalendarMenu
    if (!this.sideNavHiddenVisibility)
      menuTrigger.openMenu();
  }
}
