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

  header : string;
  body : string;

  ngOnInit(): void {
    this.getProfessors();
  }

  sendMail() {
    this.body.split('\n').join('<br>');
    console.log(localStorage.getItem("userId"));
    axios.post('https://pious2023-backed.onrender.com/email', {
      emailTo: "nebitanmail@email.com",
      header: this.header,
      body: this.body,
      accountId: localStorage.getItem("userId")
    })
    .then(response => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Uspješno ste poslali email.',
        showConfirmButton: false,
        timer: 2000
      })
    })  
    .catch(error => {
      console.log(error.response.data);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.response.data,
          showConfirmButton: false,
          timer: 3000
        })
    });
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
