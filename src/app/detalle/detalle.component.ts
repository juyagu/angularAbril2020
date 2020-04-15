import { Component, OnInit, Input } from '@angular/core';
import { Ialumno } from './../entidades';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  titulo = "Detalle del alumno";

  @Input()
  alumno: Ialumno;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarAlumno(){
    console.log(this.alumno);
  }

}

/*

[propiedad]
(eventos)
[(ngModel)]

*/


//function suma(a){ a = 13}
//function otra(a) { var j = a; j = j+2; return j }