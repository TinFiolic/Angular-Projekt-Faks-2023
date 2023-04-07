import { Component } from '@angular/core';
import axios from 'axios';
import { parseISO } from 'date-fns';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  naslov: string = "";
  opis: string = "";
  datumOd: any = "";
  datumDo: any = "";

  todoevi: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getTodo();
  }

  getUsername() {
    return localStorage.getItem("user");
  }

  getRole() {
    return localStorage.getItem("role");
  }

  getTodo() {
    axios.get('https://pious2023-backed.onrender.com/todo/' + localStorage.getItem("userId"))
    .then(response => {
      this.todoevi = response.data
      console.log(response.data);
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

  kreirajTodo() {
    if(this.naslov.length == 0 || this.opis.length == 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: "Molimo, ispunite polja naslova i opisa!",
        showConfirmButton: false,
        timer: 3000
      })
      return;
    }

    axios.post('https://pious2023-backed.onrender.com/todo/save', {
      accountId: localStorage.getItem("userId"),  
      header: this.naslov,
      description: this.opis,
      fromDateTime: parseISO(this.datumOd),
      toDateTime: parseISO(this.datumDo)
    })
    .then(response => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Uspješno ste kreirali novi podsjetnik!",
        showConfirmButton: false,
        timer: 3000
      })

      this.getTodo();
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
