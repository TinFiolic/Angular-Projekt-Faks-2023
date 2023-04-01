import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  title : string = "";
  location : string = "";
  consultations : string = "";

  occupation : string = "";
  address : string = "";
  scholarship : string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.getRole() == "STUDENT") {
      this.getStudent();
    } else {
      this.getProfessor();
    }
  }

  getUsername() {
    return localStorage.getItem("user");
  }

  getRole() {
    return localStorage.getItem("role");
  }

  getId() {
    console.log(localStorage.getItem("userId"))
    return localStorage.getItem("userId");
  }

  updateProfessor() {
    axios.post('https://pious2023-backed.onrender.com/professor/update', {
      accountId: this.getId(),
      title: this.title,
      location: this.location,
      consultations: this.consultations
    })
    .then(response => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Uspješno ste izmjenili podatke.',
        showConfirmButton: false,
        timer: 2000
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

  updateStudent() {
    axios.post('https://pious2023-backed.onrender.com/student/update', {
      accountId: this.getId(),
      occupation: this.occupation,
      address: this.address,
      scholarship: this.scholarship
    })
    .then(response => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Uspješno ste izmjenili podatke.',
        showConfirmButton: false,
        timer: 2000
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

  getStudent() {
    axios.get('https://pious2023-backed.onrender.com/student/' + this.getId())
    .then(response => {
      this.occupation = response.data.occupation;
      this.address = response.data.address;
      this.scholarship = response.data.scholarship;
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

  getProfessor() {
    axios.get('https://pious2023-backed.onrender.com/professor/' + this.getId())
    .then(response => {
      this.title = response.data.title;
      this.location = response.data.location;
      this.consultations = response.data.consultations;
    })  
    .catch(error => {
      console.log(error.response);
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
