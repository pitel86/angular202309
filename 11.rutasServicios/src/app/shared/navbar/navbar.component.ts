import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  llamadas!: number;
  constructor(private agendaS: AgendaService) {}
  ngOnInit(): void {
    this.agendaS.getContador().subscribe((contador) => {
      console.log(contador);
      this.llamadas = contador;
    });

    // this.llamadas = this.agendaS.getContadorNumber()
  }
}
