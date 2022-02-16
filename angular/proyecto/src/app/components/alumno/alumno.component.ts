import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { HttpResponse } from '@angular/common/http';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  // esta clase usa el alumnoService para obtener datos
  /* 
  angular hace la instancia 
  
  */

  //inyección de dependecias.


  lista_alumnos: Array<Alumno>;
  automatico: boolean;
  errorPersonalizado?: string;
  intervalID: any;
  iconoBasurita = faTrash;
  iconoBasurita2 = faTrashAlt;
  iconoEditar = faUserEdit;
 



  constructor(
    public servicio_alumnos: AlumnoService,
    private router: Router


  ) {


    this.lista_alumnos = new Array<Alumno>()
    this.automatico = true;
    this.intervalID = 0;
  }

  //
  ngOnInit(): void {
    this.obtenerAlumnos();
  }




  mostrarCabeceras(http_response: HttpResponse<Array<Alumno>>) {
    console.log(http_response.status);
    console.log(http_response.statusText);
    console.log(http_response.headers);
    console.log(http_response.type);
    console.log(`
              estaaatus ${http_response.status}
              ${http_response.statusText}`
    );




  }




  mostrarError(error_recibido: any): void {


    //si el alumno ya esta borrado el servidor da un error
    console.error('Ha ocurrido un error: (' + error_recibido.status + ') - ' + error_recibido.message);
    this.errorPersonalizado = error_recibido.status + ') ->>>> ' + error_recibido.message;

    //si el alumno ya esta borrado el servidor da un error
    //actualizamos la lista eliminando el alumno que no existe


  }

  ordenarPorEdad(): void {
    console.log("ordenar por edad")
    this.lista_alumnos.sort(function (a, b) { return a.edad - b.edad });
  }





  borrarAlumno(alumno: Alumno) {

    if (window.confirm("de verdad quieres borrar?")) {

      console.log("borrar alumno")
      this.servicio_alumnos.borrarAlumnoServicio(alumno.id).subscribe(
        {
          complete: () => { console.log("ha terminado"); },
          error: (error_r) => {
            console.error('fallo' + error_r)
            this.mostrarError(error_r);

            // no entiendo poruqe funciona
            this.lista_alumnos = this.lista_alumnos.filter(al => al.id != alumno.id);

          },
          next: () => {
            console.log("acciones finales");
            console.log("Alumno borrado " + alumno.id);
            this.lista_alumnos = this.lista_alumnos.filter(alum => alum.id != alumno.id);
            this.ordenarPorEdad();
            console.log(this.lista_alumnos);
          }

        })

    } else { console.log("el usuario cancela el borrado") }
  }



  editarAlumno(alumno: Alumno) {
    console.log("eeeeeeeeeeditar alumno: " + alumno.id);
    localStorage.setItem("alumno_edicion", JSON.stringify(alumno));
    this.router.navigate(["/alumno/form", alumno.id]);
   
  }






  cambiarCheckActualizar(): void {
    console.log("Caja Tocada " + this.automatico);
    this.automatico = !this.automatico;
    console.log("pasa a " + this.automatico);

    if (this.automatico == true) {

      /*
      this tiene que llamarse sobre una función anónima 
      porque en el contexto señalaría al objeto setInterval ¿?
      */
      this.intervalID = setInterval((() => this.obtenerAlumnos()), 3000);


    } else {
      clearInterval(this.intervalID);
    }

  }


 



  obtenerAlumnos(): void {


    //es el sitio para tener datos de fuera
    this.servicio_alumnos.obtenerAlumnos().subscribe
    
      (
        {
          complete: () => { console.log("acabó perfect"); },
          error: (error_r) => {
            console.error('fallo' + error_r)
            this.mostrarError(error_r);
          },
          next: listado_alumnos_rx => {
            this.lista_alumnos = listado_alumnos_rx;
          

            this.lista_alumnos.forEach
              (alumno => { console.log(`Alumno ${alumno.id} ${alumno.nombre} `) });
          }
        }
      );
    //observador - el objeto que va a recibir la llamada cuando la respuesta está ///lista.



    this.servicio_alumnos.obtenerAlumnosConCabeceras().subscribe
      (
        {
          complete: () => { console.log("acabó perfect"); },
          error: (error_r) => {
            console.error('fallo' + error_r)
            this.mostrarError(error_r);

            //  this.lista_alumnos = this.lista_alumnos.filter(alum => alum.id != alumno.id);

          },
          next: http_rx => {
            this.mostrarCabeceras(http_rx);
            //casting de un body genérico al array de alumnos
            this.lista_alumnos = <Array<Alumno>>http_rx.body; //casting al array de alumnos
            this.lista_alumnos.forEach
              (alumno => { console.log(`Alumno ${alumno.id} ${alumno.nombre} `) });
          }
        }
      );


  }






}
