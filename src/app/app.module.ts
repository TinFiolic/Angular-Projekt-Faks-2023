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
import { KreirajKolegijComponent } from './kreiraj-kolegij/kreiraj-kolegij.component';
import { UpisaniKolegijiComponent } from './upisani-kolegiji/upisani-kolegiji.component';
import { PregledStudenataComponent } from './pregled-studenata/pregled-studenata.component';
import { UpisOcjenaComponent } from './upis-ocjena/upis-ocjena.component';
import { PregledKolegijaComponent } from './pregled-kolegija/pregled-kolegija.component';

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
    MailComponent,
    KreirajKolegijComponent,
    UpisaniKolegijiComponent,
    PregledStudenataComponent,
    UpisOcjenaComponent,
    PregledKolegijaComponent
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
