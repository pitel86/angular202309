import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class FormularioModule { }
