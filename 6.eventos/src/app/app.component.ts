import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '6.eventos';

  texto: string = "pepito"

  diHola(): void{
    console.log('Hola holita vecinito');
  }

  entro(text: string): void{
    console.log('Entro', text)
  }

  
  salgo(text: string): void{
    console.log('salgo', text)
  }

  change(): void{
    console.log('change');
  }

  input(): void{
    console.log('input');
  }

  focus(): void{
    console.log('focus');
  }

  blur(): void{
    console.log('blur');
  }

  changePepito(texto: string){
    this.texto = texto;
  }
}
