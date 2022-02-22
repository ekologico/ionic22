import { HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {  faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

//esta clase usa el AlumnoService
//para obtener datos

//INYECCIÓN de dependencias

  lista_alumnos:Array<Alumno>;
  automatico:boolean;
  refresh_interval:any;

  constructor(public servicio_alumnos:AlumnoService,
    private router:Router, public platform: Platform) { 
    this.lista_alumnos= new Array<Alumno>();
    this.automatico=false;
  }

  checkTocado()
  {
    this.automatico = !this.automatico;
    console.log("Caja tocada " + this.automatico);
    
      if(this.automatico){
        this.refresh_interval = setInterval((()=>this.getAlumnos()),3000);
        //this.refresh_interval = setInterval(this.getAlumnos,3000);
      }else{
        clearInterval(this.refresh_interval);
      }
  }

  //modificarFoto

  getAlumnos ()
  {
    //usar el servicio para cargar la lista
    //aquí es el sitio para obtener datos de fuera
    this.servicio_alumnos.obtenerAlumnos().subscribe(
      //"observador"--el objeto que reciba la llamada 
      //cuando la respuesta esté lista
      {
        complete: () => {console.log("ha terminado");},
        error: (error_r) => {this.mostrarError(error_r);},
        //error: (error_r) => {console.error('FALLLO ' +error_r);},
        next: (listado_alumnos_rx) =>
        {
          this.lista_alumnos = listado_alumnos_rx;
          this.lista_alumnos.forEach (alumno => {console.log(`Alumno ${alumno.id} ${alumno.nombre} `)});
        }
      }
    );
  }

  mostrarError (error:any):void
  {
    
    console.error('Ha ocurrido un error: (' + error.status + ') - ' + error.message);
  }

  mostrarCabeceras (http_response:HttpResponse<Array<Alumno>>)
  {
    console.log(`ESTATUS ${http_response.status} ${ http_response.statusText}`);
    console.log(`TIPO ${http_response.headers.get('content-type')}`);
    
  }

  

  deleteUsuario(alumno:Alumno){
    console.log("borrar usuario " + alumno.id);
    //TODO: vamos a preguntar al usuario
    if (confirm ("¿De verdad quieres borrar?"))
    {
      this.servicio_alumnos.borrarAlumno(alumno.id).subscribe(
        //"observador"--el objeto que reciba la llamada 
        //cuando la respuesta esté lista
        {
          complete: () => {console.log("ha terminado");},
          error: (error_r) => {
            this.mostrarError(error_r);
            //si el alumno ya está borrado, el servidor
            //nos da un error y se mete por aquí
            //actualizamos la lista eliminando ese alumno
            this.lista_alumnos =this.lista_alumnos.filter(al=> al.id!=alumno.id);
          },
          //error: (error_r) => {console.error('FALLLO ' +error_r);},
          next: () =>
          {
            //1 recargar la página
            //2 eliminar del array local el usuario borrado
            this.lista_alumnos = this.lista_alumnos.filter(al=> al.id!=alumno.id);
            console.log("alumno borrado");
          }
        }
      );
  
    } else {
        console.log("el usuario cancela la acción de borrar");
    }
      }

  ngOnInit(): void {
    this.getAlumnos();

    if (this.platform.is("android"))
    {alert("estoy en android");} else  {alert("estoy en pc");}

    /*this.servicio_alumnos.obtenerAlumnosConCabeceras().subscribe(
      //"observador"--el objeto que reciba la llamada 
      //cuando la respuesta esté lista
      {
        complete: () => {console.log("ha terminado");},
        error: (error_r) => {this.mostrarError(error_r);},
        //error: (error_r) => {console.error('FALLLO ' +error_r);},
        next: (http_rx) =>
        {
          this.mostrarCabeceras(http_rx);
          this.lista_alumnos = <Array<Alumno>>http_rx.body;//CASTING Body genérico a un Array de Alumnos
          this.lista_alumnos.forEach (alumno => {console.log(`Alumno ${alumno.id} ${alumno.nombre} `)});
        }
      }
    );*/
  }

  updateUsuario(alumno:Alumno)
  {
    console.log("quiere editar al alumno " +alumno.id);
    //pasar el alumno a string (serializar)
    let alumno_string: string = JSON.stringify(alumno);
    //guardo
    localStorage.setItem('alumno_edicion',alumno_string );
    this.router.navigate(['/alumno/form', alumno.id]);
  }
}
