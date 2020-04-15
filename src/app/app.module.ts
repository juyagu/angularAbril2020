import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {OtroComponent} from './Otro/otro.component';
import { OtroMasComponent } from './otro-mas/otro-mas.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { DrivenComponent } from './driven/driven.component';
import { DrivenvalidadoComponent } from './FormulariosValidados/drivenvalidado/drivenvalidado.component';


@NgModule({
  declarations: [
    AppComponent,
    OtroComponent,
    OtroMasComponent,
    ListadoComponent,
    DetalleComponent,
    ReactiveComponent,
    DrivenComponent,
    DrivenvalidadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
