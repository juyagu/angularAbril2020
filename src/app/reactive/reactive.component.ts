import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  titulo = "Formulario Reactivo";
  constructor(private fn : FormBuilder) { }

  ngOnInit(): void {
  }

  /*formAngular = new FormGroup({
    nombre: new FormControl('Maria',Validators.required),
    apellido: new FormControl('')
  })*/

  formAngular = this.fn.group({
    nombre:['Jose'],
    apellido:['']
  })

  onSubmit(){
    console.error('Enviado');
  }

  actulizate(){
    this.formAngular.patchValue({
      nombre: 'Matildo',
      apellido:'Perez'
    })
  }

}
