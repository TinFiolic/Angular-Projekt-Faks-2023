import { Component, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user: string = "";
  activeMenu = "user";

  constructor(public router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("user") != null && sessionStorage.getItem("user") != undefined && sessionStorage.getItem("user") != "null") {
      this.user = sessionStorage.getItem("user"); 
    } else {
      location.href = '/login';
    }
  }

  onLogout(){
    sessionStorage.setItem("user", null);
    sessionStorage.setItem("role", null);
    location.href = '/login';
  }

  setActiveMenu(menu: string){
    this.activeMenu = menu;
  }

  getUsername(){
    return this.user;
  }

}
