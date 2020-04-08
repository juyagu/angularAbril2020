import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OtroComponent} from './Otro/otro.component';
import { OtroMasComponent } from './otro-mas/otro-mas.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    OtroComponent,
    OtroMasComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
