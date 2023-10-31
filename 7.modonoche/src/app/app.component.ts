import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '7.modonoche';

  modo: string = "dia";
  texto: string = "🌕";

  changeModo():void{
    this.modo = this.modo == "dia" ? "noche" : "dia";
    this.texto = this.texto == "🌕" ? "☀️" : "🌕";
  }
}
