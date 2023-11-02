import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent {
  @Output() mensajeEntrante = new EventEmitter();
  // En el output vamos a emitir un evento del hijo al padre, el padre lo recoge y hace lo que sea

  enviarMensaje(mensaje: string){
    this.mensajeEntrante.emit(mensaje)
  }
}
