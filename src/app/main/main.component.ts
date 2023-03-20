import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem("openedComponent", "login");
  }

  getOpenedComponent() {
    var openedComponent = sessionStorage.getItem("openedComponent");
    return openedComponent;
  }

  setOpenedComponent(component : string) {
    sessionStorage.setItem("openedComponent", component);
  }
}
