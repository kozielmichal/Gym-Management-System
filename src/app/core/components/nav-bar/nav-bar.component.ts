import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public showEmployeeMenu = false;
  public showPresentMenu = false;
  public sideNavHiddenVisibility = true;
  @ViewChild(MatSidenav) drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver , private router: Router) {
  }

  navigateHome(){
    // this.router.navigate(["/" + AppRoutes.HOME]);
  }
  navigateEmployee(){
    // this.router.navigate(["/" + AppRoutes.USERLIST])
  }

  navigateAddEmployee(){
    // this.router.navigate(["/" + AppRoutes.USERINFO])
  }

  navigatePreseceList(){
    // this.router.navigate(["/" + AppRoutes.PRESENCELIST])
  }

  navigateAbsenceList(){
    // this.router.navigate(["/" + AppRoutes.ABSENCE])
  }

  navigateRFID(){
    // this.router.navigate(["/" + AppRoutes.RFID])
  }

  navigateSettings(){
    // this.router.navigate(["/" + AppRoutes.SETTINGS])
  }

  onSideNavClick(drawer){
    drawer.toggle();
    this.sideNavHiddenVisibility = !this.sideNavHiddenVisibility;
    if(!this.sideNavHiddenVisibility){
      this.showEmployeeMenu = false;
      this.showPresentMenu = false;
    }
  }

  onEmployeeIconClick(menuTrigger){
    if (this.sideNavHiddenVisibility)
      this.showEmployeeMenu=!this.showEmployeeMenu;
    if (!this.sideNavHiddenVisibility)
      menuTrigger.openMenu();
  }

  onPresentIconClick(menuTrigger){
    if (this.sideNavHiddenVisibility)
      this.showPresentMenu=!this.showPresentMenu
    if (!this.sideNavHiddenVisibility)
      menuTrigger.openMenu();
  }
}
