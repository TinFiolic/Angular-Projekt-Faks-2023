import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public main: MainComponent) { }

  ngOnInit(): void {
  }

  onLogin() {
    sessionStorage.setItem("user", "User");
    sessionStorage.setItem("role", "1");
  }
}
