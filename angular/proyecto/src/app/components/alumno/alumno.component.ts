import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';

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


lista_alumnos:Array<Alumno>;
  constructor(public servicio_alumnos: AlumnoService) { 
this.lista_alumnos=new Array<Alumno>()



   }

   //
  ngOnInit(): void {
    //es el sitio para tener datos de fuera
    this.servicio_alumnos.obtenerAlumnos().subscribe  
    (
{
      complete: ()=> {console.log("acabó perfect") ;},
      error:(error_r) => { console.error('fallo'+error_r)},
      next: listado_alumnos_rx =>
      {
         this.lista_alumnos = listado_alumnos_rx;
          this.lista_alumnos.forEach 
          (alumno => {console.log(`Alumno ${alumno.id} ${alumno.nombre} `)});
      }
    }
   );
    //observador - el objeto que va a recibir la llamada cuando la respuesta está lista.

  }

}
