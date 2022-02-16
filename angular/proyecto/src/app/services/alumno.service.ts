import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
cabeceras: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

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
//devuelve un obsrvable alumno
crearAlumno (alumno:Alumno):Observable<Alumno>
{
  // devuelve el resultado del post alumno 
  return this.http.post<Alumno>(this.ruta_servidor,alumno, {headers: this.cabeceras});
 // la mia mala
  // return this.http.post(this.ruta_servidor,alumno, {headers: this.cabeceras});
}




}
