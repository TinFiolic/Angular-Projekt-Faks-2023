import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upisani-kolegiji',
  templateUrl: './upisani-kolegiji.component.html',
  styleUrls: ['./upisani-kolegiji.component.css']
})
export class UpisaniKolegijiComponent {

  courses : any[] = [];

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    axios.get('https://pious2023-backed.onrender.com/course/account/' + localStorage.getItem("userId"))
    .then(response => {
      this.courses = response.data;
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
}
