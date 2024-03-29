import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("openedComponent", "forgotpassword");
  }

  setOpenedComponent(component : string) {
    localStorage.setItem("openedComponent", component);
  }
}
