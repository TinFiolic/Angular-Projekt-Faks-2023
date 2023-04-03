import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pregled-studenata',
  templateUrl: './pregled-studenata.component.html',
  styleUrls: ['./pregled-studenata.component.css']
})
export class PregledStudenataComponent {

  studenti : any[] = [];

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    axios.get('https://pious2023-backed.onrender.com/student/all')
    .then(response => {
      this.studenti = response.data;
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
