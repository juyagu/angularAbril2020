import { Component, OnInit } from '@angular/core';
import { Alumno } from './../entidades';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent implements OnInit {
  titulo = "Template Driven Forms";
  alumno: Alumno;  
  constructor() {
    this.alumno = new Alumno('Andrea','Jota','',60);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Enviado la info al backend");
  }

}
