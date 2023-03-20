import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("openedComponent", "login");
  }

  onLogin() {
    localStorage.setItem("user", "User");
    localStorage.setItem("role", "1");
    localStorage.setItem("openedComponent", "dashboard");
  }

  setOpenedComponent(component : string) {
    localStorage.setItem("openedComponent", component);
  }
}
