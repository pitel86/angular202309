import { Component, OnInit } from '@angular/core';
import { ContactI } from 'src/app/shared/models/contact';
import { AgendaService } from 'src/app/shared/services/agenda.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit{
  listado!: ContactI[];


  constructor(private agendaS: AgendaService){}

  ngOnInit(): void {
    // this.listado = [...this.agendaS.getContactos()]
    this.agendaS.getContactos().subscribe((listado) => this.listado = [...listado])
  }

  llamar(){
    console.log(this.agendaS.contador)
    this.agendaS.llamar();
  }
}
