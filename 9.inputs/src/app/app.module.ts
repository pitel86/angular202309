import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { RangerComponent } from './ranger/ranger.component';
import { RangersComponent } from './rangers/rangers.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RangerComponent,
    RangersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
