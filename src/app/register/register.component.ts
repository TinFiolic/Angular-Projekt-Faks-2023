import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem("openedComponent", "register");
  }

  setOpenedComponent(component : string) {
    sessionStorage.setItem("openedComponent", component);
  }
}
