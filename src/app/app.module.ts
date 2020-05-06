import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//@angular/http

import { AppBoostrapModule } from './app-bootstrap.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { PeliculaService } from './servicios/pelicula.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    NavbarComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppBoostrapModule,
    AppRoutingModule
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
