import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeliculaService } from './../../servicios/pelicula.service';
import { Pelicula } from './../../entities/pelicula';
import { Genero } from './../../entities/genero';
import { PeliculaClase } from './../../entities/peliculaClase';


import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  id:number;
  nombre:string;
  titulo:string;
  peliculaNueva:boolean;
  @Output()
  cancelar = new EventEmitter();

  @Output()
  guardar = new EventEmitter();

  pelicula: Pelicula;
  peliculaClase:PeliculaClase;
  generos : Genero[];


  constructor(private svcPelicula : PeliculaService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => {this.id = params['id']})
  }

  ngOnInit() {
    if(typeof this.id !== 'undefined'){
      this.peliculaNueva = false;
      this.titulo = "Modificar película";
      this.getPelicula();
    }else{
      this.peliculaNueva = true;
      this.titulo = "Alta de película";
      this.pelicula = {id:0, titulo: "",genero:"",director:"",foto:""}
      this.peliculaClase = new PeliculaClase(0,"","","","");
    }
    
    this.obtenerGeneros();
  }

  cancelarEdicion(){
    //this.cancelar.emit(false);
    this.router.navigate(['/home']);
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
