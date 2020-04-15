import { Component, OnInit } from '@angular/core';
import { Alumno, Ialumno } from './../entidades';
//import { IAlumno } from './../entidades';

/*const ALUMNOS = [
  new Alumno('Maria','Perez','Angular',33),
  new Alumno('Jose','Rodriguez','PHP',41),
  new Alumno('Romina','Re','Java',24)
]*/

const ALUMNOS: Ialumno[] = [
  {nombre: 'Maria',apellido: 'Perez', curso: 'Angular',edad: 33},
  {nombre: 'Jose',apellido: 'Rodriguez', curso: 'PHP',edad: 41},
  {nombre: 'Romina',apellido: 'Re', curso: 'Java',edad: 24},
]


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  alumnos : Alumno[] = ALUMNOS;
  alumnoSeleccionado: Ialumno;
  constructor() { }

  ngOnInit(): void {
  }

  verDetalleAlumno(alumno:Ialumno){
    //console.log(alumno);
    this.alumnoSeleccionado = alumno;
  }
}
