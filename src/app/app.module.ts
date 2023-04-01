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
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { MailComponent } from './mail/mail.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ForgotpassComponent,
    DashboardComponent,
    KorisnikComponent,
    HomepageComponent,
    TodoComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule
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
