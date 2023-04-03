import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user: string = "";
  activeMenu = "homepage";
  rola: string = "STUDENT";

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("openedComponent", "dashboard");
    this.user = localStorage.getItem("user");
  }

  onLogout(){
    localStorage.setItem("user", null);
    localStorage.setItem("role", null);
    localStorage.setItem("userId", null);
    localStorage.setItem("openedComponent", "login");

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Uspješno ste se odjavili',
      showConfirmButton: false,
      timer: 3000
    })
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

  getRola() {
    this.rola = localStorage.getItem("role");
  }

}
