import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RUTA_JSON_SERVER, RUTA_SERVIDOR_CLASE } from '../config/app';
import { Alumno } from '../models/alumno';

/*
Esto es un servicio
que va a llevar la comunición HTTP
con el servidor
*/

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  //ruta_servidor:string=RUTA_SERVIDOR_CLASE;
  ruta_servidor:string=RUTA_SERVIDOR_CLASE;
  cabeceras: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http:HttpClient) {

   }

  //crearAlumno - POST
  //leerAlumnos - GET (all) x
  //leerAlumno por Id - GET
  //modificarAlumno - PUT
  //borrarAlumno - DELETE x
  obtenerAlumnos():Observable<Array<Alumno>>
  {
   return this.http.get<Array<Alumno>>(this.ruta_servidor); 
   //return this.http.get<Alumno[]>("http://10.1.2.10:8090/api/alumnos"); 
  }

  obtenerAlumnosConCabeceras():Observable<HttpResponse<Array<Alumno>>>
  {
   return this.http.get<Array<Alumno>>(this.ruta_servidor, {observe: 'response'}); 
   //return this.http.get<Alumno[]>("http://10.1.2.10:8090/api/alumnos"); 
  }

  borrarAlumno (id:number):Observable<void>
  {
    return this.http.delete<void>(this.ruta_servidor+id);
  }

  public actualizarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(this.ruta_servidor + alumno.id, alumno, { headers: this.cabeceras });
  }

  crearAlumno (alumno:Alumno):Observable<Alumno>
  {
    return this.http.post<Alumno>(this.ruta_servidor,alumno, {headers: this.cabeceras});
  }

  crearAlumnoConFoto (alumno:Alumno, archivo:File):Observable<Alumno>
    //en el cuerpo vaija el alumno y el fichero
    {
    let formData = new FormData();

      formData.append('nombre', alumno.nombre);
      formData.append('apellido', alumno.apellido);
      formData.append('edad', alumno.edad+'');
      formData.append('email', alumno.email);
      formData.append('archivo', archivo);

      return this.http.post<Alumno>(this.ruta_servidor+"crear-con-foto",formData);

    }

    editarAlumnoConFoto (alumno:Alumno, archivo:File):Observable<Alumno>
    //en el cuerpo vaija el alumno y el fichero
    {
    let formData = new FormData();

      formData.append('nombre', alumno.nombre);
      formData.append('apellido', alumno.apellido);
      formData.append('edad', alumno.edad+'');
      formData.append('email', alumno.email);
      formData.append('archivo', archivo);

      return this.http.put<Alumno>(this.ruta_servidor+"editar-con-foto/"+alumno.id,formData);

    }
}
