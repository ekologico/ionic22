import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { HttpResponse } from '@angular/common/http';

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
  errorPersonalizado?: string;
  constructor(public servicio_alumnos: AlumnoService) {
    this.lista_alumnos = new Array<Alumno>()



  }

  //
  ngOnInit(): void {
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
    //observador - el objeto que va a recibir la llamada cuando la respuesta está lista.



    this.servicio_alumnos.obtenerAlumnosConCabeceras().subscribe
      (
        {
          complete: () => { console.log("acabó perfect"); },
          error: (error_r) => {
            console.error('fallo' + error_r)
            this.mostrarError(error_r);
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
    console.error('Ha ocurrido un error: (' + error_recibido.status + ') - ' + error_recibido.message);
    this.errorPersonalizado = error_recibido.status + ') ->>>> ' + error_recibido.message;
  }

  ordenarPorEdad(): void {
    console.log("ordenar por edad")
    this.lista_alumnos.sort(function (a, b) { return a.edad - b.edad });
  }


  borrarAlumno(alumno: Alumno) {

    console.log("borrar alumno")
    this.servicio_alumnos.borrarAlumnoServicio(alumno.id).subscribe(
      {
        complete: () => { console.log("ha terminado"); },
        error: (error_r) => {
          console.error('fallo' + error_r)
          this.mostrarError(error_r);
        },
        next: ()=> {
          console.log ("acciones finales");
          console.log ("Alumno borrado");
          this.lista_alumnos.filter(al => al.id!=alumno.id);
        }


      })
    }

  

  editarAlumno(): void {
    console.log("editar alumno")
  }


}
