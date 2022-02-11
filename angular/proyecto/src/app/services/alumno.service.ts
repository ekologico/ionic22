import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RUTA_SERVIDOR_CLASE } from '../config/app';
import { Alumno } from '../models/alumno';


@Injectable({
  /* servicio que va a llevar la comunicación http con el servidor */
  providedIn: 'root'
})
export class AlumnoService {

ruta_servidor: string= RUTA_SERVIDOR_CLASE;
  //inyección de dependencias
  //el objeto http que es del la clase HttpClient
  /* la idea es la independencia sobre 


  */
  constructor(private http:HttpClient) {   

    //crearAlumno
    //leerAlumno
    //modificarAlumno
    //borrarAlumno
  }


obtenerAlumnos():Observable<Array<Alumno>>{
 return this.http.get<Array<Alumno>>(this.ruta_servidor)
}


// 
obtenerAlumnosConCabeceras():Observable<HttpResponse<Array<Alumno>>>{
  return this.http.get<Array<Alumno>>(this.ruta_servidor, {observe: 'response'});
 }


borrarAlumnoServicio(id:number):Observable <void>{
  return this.http.delete<void>(this.ruta_servidor+id);
}


}
