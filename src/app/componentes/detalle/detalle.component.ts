import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeliculaService } from './../../servicios/pelicula.service';
import { Pelicula } from './../../entities/pelicula';
import { Genero } from './../../entities/genero';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input()
  id:number;

  @Output()
  cancelar = new EventEmitter();

  @Output()
  guardar = new EventEmitter();

  pelicula: Pelicula;
  generos : Genero[];


  constructor(private svcPelicula : PeliculaService) { }

  ngOnInit() {
    this.getPelicula();
    this.obtenerGeneros();
  }

  cancelarEdicion(){
    this.cancelar.emit(false);
  }

  getPelicula(){
    this.svcPelicula.getPeliculaxId(this.id)
      .subscribe(data => this.pelicula = data);
  }

  obtenerGeneros(){
    this.svcPelicula.getGeneros()
      .subscribe(data => this.generos = data);
  }

  seleccionGenero(){
    console.log(this.pelicula);
  }

  guardarCambios(){
    this.svcPelicula.updatePelicula(this.pelicula)
      .subscribe(data => {
        if(data.affectedRows === 1){
          console.log('Genial');
          this.guardar.emit(true);
        }
      })
  }

}
