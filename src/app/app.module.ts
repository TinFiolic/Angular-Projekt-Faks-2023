import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ForgotpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatRadioModule
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
