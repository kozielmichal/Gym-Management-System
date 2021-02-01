import { ScheduleModule } from './schedule/schedule.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    UsersModule,
    AuthModule,
    ScheduleModule,
    AppRoutingModule,
    MatNativeDateModule,

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
