import { Component } from '@angular/core';
import { ContactI } from '../models/model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  listado: ContactI[];

  constructor(){
    this.listado = [
      {
        name: 'Pepito',
        email: "pepito@gmail.com",
        phone: 900900900
      },{
        name: 'Juanito',
        email: "juanito@gmail.com",
        phone: 900900901
      }
    ]
  }

  newContact(contacto: ContactI){
    this.listado = [...this.listado, contacto];
  }
}
