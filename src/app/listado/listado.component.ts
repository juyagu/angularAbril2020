import { Component, OnInit } from '@angular/core';
import { Alumno } from './../entidades/alumno';
const ALUMNOS = [
  new Alumno('Maria','Perez','Angular',33),
  new Alumno('Jose','Rodriguez','PHP',41),
  new Alumno('Romina','Re','Java',24)
]


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  alumnos : Alumno[] = ALUMNOS;
  constructor() { }

  ngOnInit(): void {
  }

}
