import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../entidades';

@Component({
  selector: 'app-drivenvalidado',
  templateUrl: './drivenvalidado.component.html',
  styleUrls: ['./drivenvalidado.component.css']
})
export class DrivenvalidadoComponent implements OnInit {

  constructor() { }
  pelicula: Pelicula;
  ngOnInit(): void {
    this.pelicula = {titulo:'',director:'',genero:0}
  }

  formEnviado(){

  }

}

//$(document).ready()
//document.addEventListener('DOMCONTENTLOADED')
//SESSION
