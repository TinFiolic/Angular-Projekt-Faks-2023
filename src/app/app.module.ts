import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ForgotpassComponent,
    DashboardComponent,
    KorisnikComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  exports: [
    MainComponent, 
    LoginComponent, 
    RegisterComponent, 
    ForgotpassComponent
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
