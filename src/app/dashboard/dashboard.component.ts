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
    localStorage.setItem("openedComponent", "dashboard");
    this.user = localStorage.getItem("user");
  }

  onLogout(){
    localStorage.setItem("user", null);
    localStorage.setItem("role", null);
    localStorage.setItem("openedComponent", "login");
  }

  setActiveMenu(menu: string){
    this.activeMenu = menu;
  }

  getUsername(){
    return this.user;
  }

  setOpenedComponent(component : string) {
    localStorage.setItem("openedComponent", component);
  }
}
