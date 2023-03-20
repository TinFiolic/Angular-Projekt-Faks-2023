import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user: string = "";
  activeMenu = "homepage";

  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem("openedComponent", "dashboard");
    this.user = sessionStorage.getItem("user");
  }

  onLogout(){
    sessionStorage.setItem("user", null);
    sessionStorage.setItem("role", null);
    sessionStorage.setItem("openedComponent", "login");
  }

  setActiveMenu(menu: string){
    this.activeMenu = menu;
  }

  getUsername(){
    return this.user;
  }

  setOpenedComponent(component : string) {
    sessionStorage.setItem("openedComponent", component);
  }
}
