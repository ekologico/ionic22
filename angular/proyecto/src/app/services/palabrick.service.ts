import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RUTA_SERVIDOR_CLASE } from '../config/app';
//import { Alumno } from '../models/alumno';





@Injectable({
  providedIn: 'root'
})
export class PalabrickService {


  constructor() { 



   }


   obtenerDatos():Array<number> | null{
   //obtenerDatos():Observable<Array<number>> {
    let array_resultado2: Array<number> | null ;
    let array_resultado: string | null = localStorage.getItem('palabrick_resultados')
    if (array_resultado != null) {
  
      array_resultado2 = JSON.parse(array_resultado);
    }else{
      array_resultado2=null;
    }
    return array_resultado2;
   }


   guardarDatos(array_datos:Array<number>):void{
    localStorage.setItem('palabrick_resultados', JSON.stringify(array_datos));
    console.log(JSON.stringify(array_datos));


   }

}
