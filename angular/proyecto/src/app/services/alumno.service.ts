import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';


@Injectable({
  /* servicio que va a llevar la comunicación http con el servidor */
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) {   

    //crearAlumno
    //leerAlumno
    //modificarAlumno
    //borrarAlumno
  }


obtenerAlumnos():Observable<Array<Alumno>>{
 return this.http.get<Array<Alumno>>("http://10.1.2.10:8085/")
}


// 
obtenerAlumnosConCabeceras():Observable<HttpResponse<Array<Alumno>>>{
  return this.http.get<Array<Alumno>>("http://10.1.2.10:8085/", {observe: 'response'});
 }


borrarAlumnoServicio(id:number):Observable <void>{
  this.http.delete<void>("http://10.1.2.10:8085/"+id);
}


}
