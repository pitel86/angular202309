import { Injectable } from '@angular/core';
import { ContactI } from '../models/contact';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  contactos: ContactI[] = [];
  contador: number = 0;

  //Utilizamos ReplaySubject para generar un tipo de dato observable
  contactosSubject: ReplaySubject<ContactI[]> = new ReplaySubject();
  contadorSubject: ReplaySubject<number> = new ReplaySubject();

  constructor() {
    this.contactos = [
      {
        name: "Pepe",
        email: "pepe@gmail.com",
        phone: 900900900
      },{
        name: "Maria",
        email: "maria@gmail.com",
        phone: 900900901
      }
    ]


    //asgiinamos los datos al tipo observable --> lo asignamos con next
    this.contactosSubject.next([...this.contactos]);
    this.contadorSubject.next(this.contador);
   }

   getContactos(): Observable<ContactI[]> {
    // return this.contactos;
    return this.contactosSubject;
   }

   addContacto(contacto: ContactI){
    this.contactos = [...this.contactos, contacto];
    this.contactosSubject.next([...this.contactos]);
   }

   getContador(): Observable<number>{
    return this.contadorSubject;
   }

   getContadorNumber(): number{
    return this.contador;
   }

   llamar(){
    this.contador++;
    this.contadorSubject.next(this.contador);
   }
}
