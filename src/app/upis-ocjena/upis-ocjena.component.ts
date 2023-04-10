import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upis-ocjena',
  templateUrl: './upis-ocjena.component.html',
  styleUrls: ['./upis-ocjena.component.css']
})
export class UpisOcjenaComponent {

  listaStudenata : any[] = [];
  odabraniStudent : number;

  listaKolegija : any[] = [];
  odabraniKolegij : number;

  ocjena : number;

  ngOnInit(): void {
    this.getStudents();
  }

  upisiOcjenu() {
    axios.post('https://pious2023-backed.onrender.com/grade/save', {
      accountId: this.odabraniStudent,
      courseId: this.odabraniKolegij,
      grade: this.ocjena
    })
    .then(response => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Uspješno ste upisali ocjenu.',
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

  getStudents() {
    axios.get('https://pious2023-backed.onrender.com/student/all')
    .then(response => {
      this.listaStudenata = response.data;
      this.odabraniStudent = this.listaStudenata[0].account.id;
      this.getKolegiji();
    })  
    .catch(error => {
      console.log(error);
    });
  }

  getKolegiji() {
    axios.get('https://pious2023-backed.onrender.com/course/account/' + this.odabraniStudent)
    .then(response => {
      if(response.data != null) {
        this.listaKolegija = response.data;
        this.odabraniKolegij = this.listaKolegija[0].id;
      }
    })  
    .catch(error => {
      console.log(error);
    });
  }
}