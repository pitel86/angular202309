import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '5.templates';

  isBlue: boolean = true;

  superman = {
    name: "clark kent",
    age: 28,
    isAlive: false
  }

  favoritos = {
    bgColor: "#333333",
    color: "#ffff00"
  }

}
