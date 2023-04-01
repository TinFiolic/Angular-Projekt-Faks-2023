import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "";
  password : string = "";

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("openedComponent", "login");
  }

  onLogin() {
    axios.post('https://pious2023-backed.onrender.com/account/login', {
      email: this.username,
      password: this.password
    })
    .then(response => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Uspješno ste se prijavili kao ' + response.data.firstName + ' ' + response.data.lastName  + '.',
        showConfirmButton: false,
        timer: 2000
      })

      localStorage.setItem("user", response.data.username);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("openedComponent", "dashboard");
    })  
    .catch(error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.response.data,
          showConfirmButton: false,
          timer: 3000
        })
    });
  }

  setOpenedComponent(component : string) {
    localStorage.setItem("openedComponent", component);
  }
}
