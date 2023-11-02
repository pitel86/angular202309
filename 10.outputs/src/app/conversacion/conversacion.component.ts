import { Component } from '@angular/core';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.scss']
})
export class ConversacionComponent {

    mensajeRecibido(mensaje: string){
      console.log("recibo algo del hijo:", mensaje);
    }
}
