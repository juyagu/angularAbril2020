import { Injectable } from '@angular/core';
import { Pelicula } from './../entities/pelicula';
import { Genero } from './../entities/genero';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from './../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable()
export class PeliculaService {
  url:string = environment.url;
  constructor(private http: HttpClient) { }

  getPeliculas() : Observable<Pelicula[]>{
    /*return new Observable((observer: Observer<Pelicula[]>) => {
      observer.next(PELICULAS);
      observer.complete();*/
      const respuesta = this.http.get<Pelicula[]>(this.url);
      return respuesta;
  }

  getPeliculaxId(id:number):Observable<Pelicula>{
    return this.http.get<Pelicula>(`${this.url}/${id}`)
  }

  getGeneros():Observable<Genero[]>{
    return this.http.get<Genero[]>("http://localhost:3001/angular5/generos");
  }

  updatePelicula(pelicula:Pelicula):Observable<any>{
    return this.http.put<any>(`http://localhost:3001/angular5/peliculas/${pelicula.id}`
    ,pelicula,httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse){
    console.log(`El backend retornó el codigo ${error.status}, el cuerpo del mensaje
    es ${error.message}`);
    
    return throwError("Algo salió mal, intentá mas tarde");
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


try{
  intenta esto
}cath(Exception e){
  y si rompe entra aca
}

*/