import { Component } from '@angular/core';
import { AnyComponent } from '@fullcalendar/core/preact';
import axios from 'axios';
import Swal from 'sweetalert2';
import { parseISO } from 'date-fns';

@Component({
  selector: 'app-kreiraj-kolegij',
  templateUrl: './kreiraj-kolegij.component.html',
  styleUrls: ['./kreiraj-kolegij.component.css']
})
export class KreirajKolegijComponent {
  listaProfesora : any[] = [];
  listaProfesoraIzabranih : any[] = [];
  selektiraniProfesorPrvi : any;
  selektiraniProfesorDrugi : any;

  ime : string = "";
  ects : number = 0;
  opis : string = "";
  literatura : string = "";
  semestar : number = 0;
  datumOd : any;
  datumDo : any;
  listaProfesorId : any = [];

  ngOnInit(): void {
    this.getProfessors();
  }

  kreirajKolegij() {
    this.listaProfesoraIzabranih.forEach((value) => {
      this.listaProfesorId.push(value.id);
    }); 

    console.log(this.listaProfesorId);

    axios.post('https://pious2023-backed.onrender.com/course/save', {
      name: this.ime,
      ects: this.ects,
      description: this.opis,
      semester: this.semestar,
      literature: this.literatura,
      fromDateTime: parseISO(this.datumOd),
      toDateTime: parseISO(this.datumDo),
      professors: this.listaProfesorId
    })
    .then(response => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Uspješno ste kreirali novi kolegij!",
        showConfirmButton: false,
        timer: 3000
      })

      this.listaProfesorId = [];
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

    this.listaProfesorId = [];
  }

  getProfessors() {
    axios.get('https://pious2023-backed.onrender.com/professor/dropdown')
    .then(response => {
      this.listaProfesora = response.data;
      this.selektiraniProfesorPrvi = this.listaProfesora[0];
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

  dodaj () {
    this.listaProfesoraIzabranih.push(this.selektiraniProfesorPrvi);
    const set = new Set(this.listaProfesoraIzabranih);
    this.listaProfesoraIzabranih = Array.from(set);
  }

  makni() {
    console.log(this.listaProfesoraIzabranih);
    console.log(this.selektiraniProfesorDrugi);
    const index = this.listaProfesoraIzabranih.indexOf(this.selektiraniProfesorDrugi);
    if (index !== -1) {
      this.listaProfesoraIzabranih.splice(index, 1);
    }
  }

  selektirajPrvi(profesor : any) {
    this.selektiraniProfesorPrvi = profesor;
  }

  selektirajDrugi(profesor : any) {
    this.selektiraniProfesorDrugi = profesor;
  }
}
