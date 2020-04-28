import { Component, OnInit } from '@angular/core';
import { PeliculaService } from './../../servicios/pelicula.service';
import { Pelicula } from './../../entities/pelicula';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //servicioLoco = new PeliculaService();
  constructor(private svcPelicula : PeliculaService) { }
  peliculas:Pelicula[];


  ngOnInit() {
    this.getListadoPeliculas();  
  }

  getListadoPeliculas(){
    this.svcPelicula.getPeliculas()
      .subscribe(data => {
        this.peliculas = data;
      })
  }

}

// ng g service nombredelservicio
// $(document).ready()