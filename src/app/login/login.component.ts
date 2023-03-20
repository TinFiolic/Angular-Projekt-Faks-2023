import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem("openedComponent", "login");
  }

  onLogin() {
    sessionStorage.setItem("user", "User");
    sessionStorage.setItem("role", "1");
    sessionStorage.setItem("openedComponent", "dashboard");
  }

  setOpenedComponent(component : string) {
    sessionStorage.setItem("openedComponent", component);
  }
}
