import { Component, EventEmitter, Output } from '@angular/core';
import { ContactI } from '../models/model';

@Component({
  selector: 'app-contacto-nuevo',
  templateUrl: './contacto-nuevo.component.html',
  styleUrls: ['./contacto-nuevo.component.scss']
})
export class ContactoNuevoComponent {
  @Output() addContact = new EventEmitter();

  enviarContacto(contacto: ContactI){
    this.addContact.emit(contacto);
  }

  toNumber(numero: string): number {
    return parseInt(numero)
  }
}
