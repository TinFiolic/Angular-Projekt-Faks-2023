import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("openedComponent") == null)
      localStorage.setItem("openedComponent", "login");
  }

  getOpenedComponent() {
    var openedComponent = localStorage.getItem("openedComponent");
    return openedComponent;
  }

  setOpenedComponent(component : string) {
    localStorage.setItem("openedComponent", component);
  }
}
