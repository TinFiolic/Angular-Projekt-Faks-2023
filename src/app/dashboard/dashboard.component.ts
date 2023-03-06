import { Component, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user: string = "";
  activeMenu = "user";

  constructor(public main: MainComponent) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("user") != null && sessionStorage.getItem("user") != undefined && sessionStorage.getItem("user") != "null") {
      this.user = sessionStorage.getItem("user"); 
    } else {
      this.main.setActiveScreen("login");
    }
  }

  onLogout(){
    sessionStorage.setItem("user", null);
    sessionStorage.setItem("role", null);
    this.main.setActiveScreen("login");
  }

  setActiveMenu(menu: string){
    this.activeMenu = menu;
  }

  getUsername(){
    return this.user;
  }

}
