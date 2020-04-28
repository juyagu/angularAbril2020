import { Injectable } from '@angular/core';
import { Pelicula } from './../entities/pelicula';
import { PELICULAS } from './../mock-peliculas';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor() { }

  getPeliculas() : Observable<Pelicula[]>{
    return new Observable((observer: Observer<Pelicula[]>) => {
      observer.next(PELICULAS);
      observer.complete();
    })
  }

}


/*
class Persona -> singleton

const p = new Persona();
const p1 = new Persona();
const j = new Persona();



Eficaz - Eficiente

Asincronía
// Promise - fetch - async await
// axios
// rxjs => Observables


*/