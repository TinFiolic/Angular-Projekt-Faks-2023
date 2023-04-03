import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pregled-kolegija',
  templateUrl: './pregled-kolegija.component.html',
  styleUrls: ['./pregled-kolegija.component.css']
})
export class PregledKolegijaComponent {

  courses : any[] = [];

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    axios.get('https://pious2023-backed.onrender.com/course/notEnrolled/account/' + localStorage.getItem("userId"))
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

  upisi(id: number) {
    axios.post('https://pious2023-backed.onrender.com/course/enroll', {
      accountId: localStorage.getItem("userId"),
      courseId: id
    })
    .then(response => {
      this.getCourses();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Uspješno ste upisali kolegij!",
        showConfirmButton: false,
        timer: 3000
      })
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
