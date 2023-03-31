import { Component, OnInit } from '@angular/core';
import { J } from '@fullcalendar/core/internal-common';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("openedComponent", "register");
  }

  setOpenedComponent(component : string) {
    localStorage.setItem("openedComponent", component);
  }

  async registerAccount(ime:string, prezime:string, jmbag_:string, lozinka:string, opetlozinka:string, nastavnik:number, student:boolean) {

    if(ime.length == 0 || prezime.length == 0, lozinka.length == 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Sva polja moraju biti popunjena!',
        showConfirmButton: false,
        timer: 3000
      })
      return;
    }

    if(jmbag_.length != 10 && student == true) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'JMBAG mora sadržavati 10 znamenki!',
        showConfirmButton: false,
        timer: 3000
      })
      return;
    }

    if(lozinka != opetlozinka) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Lozinke se ne podudaraju!',
        showConfirmButton: false,
        timer: 3000
      })
      return;
    }

    var rola : string;
    if(student == true) {
      rola = 'STUDENT';
    } else {
      rola = 'PROFESSOR';
    }

    axios.post('https://pious2023-backed.onrender.com/account', {
      firstName: ime,
      lastName: prezime,
      jmbag: jmbag_,
      password: lozinka,
      role: rola
    })
    .then(response => {
      if(response.status == 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Uspješno ste se registrirali. Vaša generirana e-mail adresa je: ' + response.data,
          showConfirmButton: false,
          timer: 7000
        })
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: response.data,
          showConfirmButton: false,
          timer: 3000
        })      
      }
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
