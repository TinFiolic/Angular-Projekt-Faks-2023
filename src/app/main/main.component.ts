import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  activeScreen: string = "login"; 

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("user") != null && sessionStorage.getItem("user") != undefined) {
      this.setActiveScreen("dashboard");
    }
  }

  setActiveScreen(screen: string){
    this.activeScreen = screen;
  }

}
