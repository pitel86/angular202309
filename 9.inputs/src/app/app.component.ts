import { Component } from '@angular/core';
import { PowerRangerI } from './interfaces/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '9.inputs';

  texto: string = "se lo envío como parametro";
  texto2: string = "y este también";

  powerRangers: PowerRangerI[];

  constructor(){
    this.powerRangers = [
      {
        name: "Red Ranger",
        color: "Rojo",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/1_016_-_Power_Rangers_--_Armored_Red_Ranger_%2836696714341%29.jpg/300px-1_016_-_Power_Rangers_--_Armored_Red_Ranger_%2836696714341%29.jpg",
        robot: "Red Zord",
        isAlive: true
      },
      {
        name: "White Ranger",
        color: "Blanco",
        imagen: "https://m.media-amazon.com/images/I/815GXLePGtL.jpg",
        robot: "White Zord",
        isAlive: false
      },
      {
        name: "Black Ranger",
        color: "Negro",
        imagen: "https://m.media-amazon.com/images/I/5160GSPNrhL._AC_UF894,1000_QL80_.jpg",
        robot: "Black Zord",
      },
      {
        name: "Blue Ranger",
        color: "Azul",
        imagen: "https://futurartshop.com/79694-thickbox_default/power-rangers-personaje-azul-ranger-30-cm.jpg",
        robot: "Blue Zord",
      },
      {
        name: "Yellow Ranger",
        color: "Amarillo",
        imagen: "https://m.media-amazon.com/images/I/61ZmBHDeHgL.jpg",
        robot: "Yellow Zord",
      },
      {
        name: "Pink Ranger",
        color: "Rosa",
        imagen: "https://m.media-amazon.com/images/I/71RFHsNxtuL.jpg",
        robot: "Pink Zord",
      },
      {
        name: "Green Ranger",
        color: "Verde",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_632107-MLM53712082231_022023-O.webp",
        robot: "Green Zord",
      }
    ]
  }
}
