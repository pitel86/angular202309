import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversacionComponent } from './conversacion/conversacion.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactoNuevoComponent } from './contacto-nuevo/contacto-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversacionComponent,
    MensajeComponent,
    AgendaComponent,
    ContactosComponent,
    ContactoNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
