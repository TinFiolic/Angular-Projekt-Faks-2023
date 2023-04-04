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
  rola: string = "";

  activeMenuItem: number = 0;

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("openedComponent", "dashboard");
    this.user = localStorage.getItem("user");
    this.getRola();
    
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

    let timerInterval
    Swal.fire({
      title: 'Učitavam...',
      html: '',
      timer: 1000,
      timerProgressBar: true,
      backdrop: `
      rgba(0,0,0,0.9)
    `,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    })
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
