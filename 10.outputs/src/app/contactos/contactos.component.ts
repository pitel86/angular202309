import { Component, Input } from '@angular/core';
import { ContactI } from '../models/model';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent {
  @Input() listado!: ContactI[];
}
