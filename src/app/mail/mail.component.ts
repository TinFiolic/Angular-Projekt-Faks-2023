import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  listaProfesora : any[] = [];

  ngOnInit(): void {
    this.getProfessors();
  }

  sendMail() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  getProfessors() {
    axios.get('https://pious2023-backed.onrender.com/professor/dropdown')
    .then(response => {
      this.listaProfesora = response.data;
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
