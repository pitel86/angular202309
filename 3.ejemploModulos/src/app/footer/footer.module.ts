import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FooterComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
