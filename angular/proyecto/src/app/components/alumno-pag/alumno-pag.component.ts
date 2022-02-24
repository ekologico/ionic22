import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-pag',
  templateUrl: './alumno-pag.component.html',
  styleUrls: ['./alumno-pag.component.css']
})
export class AlumnoPagComponent implements OnInit, AfterViewInit {

  //! "yo me encargo de inicializarlo"
  //? "esta varialbe puede ser nula" - no me obliga a inicializarlo
  //?? operador https://stackoverflow.com/questions/62913315/operator-in-typescript
  @ViewChild('mipaginador') paginador!:MatPaginator;

  totalRegistros:number=0;
  totalPorPagina:number=2;
  opcionesTamanoPagina:number[]=[2, 4, 10, 20];
  paginaActual:number=0;
  lista_alumnos:Array<Alumno>;
  
  constructor(public servicio_alumnos:AlumnoService) { 
    this.lista_alumnos= new Array<Alumno>();
  }
  ngAfterViewInit(): void {
    //aquí ya sabemos que se ha inicializado la vista/los hijos
    this.paginador._intl.itemsPerPageLabel="Registros por página";
    this.paginador._intl.nextPageLabel="Siguiente";
    this.paginador._intl.previousPageLabel="Anterior";
    this.paginador._intl.firstPageLabel="Primera página";
    this.paginador._intl.lastPageLabel="Última página";

  }

  ngOnInit(): void {
    this.getAlumnosFromService();
  }

  getAlumnosFromService ()
  {
    this.servicio_alumnos.obtenerAlumnosPorPaginas
    (this.paginaActual, this.totalPorPagina).subscribe
    ({
      complete: () => {console.log("ha terminado");},
      error: (error_r) => {console.error(error_r);},
      //error: (error_r) => {console.error('FALLLO ' +error_r);},
      next: (respuesta) =>
      {
        this.lista_alumnos = respuesta.content as Alumno[];//hago el casting
        this.totalRegistros = respuesta.totalElements;
        //this.lista_alumnos.forEach (alumno => {console.log(`Alumno ${alumno.id} ${alumno.nombre} `)});
      }
    }

    )
  }

  paginar(event:PageEvent)
  {
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    //tengo que llamar al servicio con los parámetros
    //actualizados de page y size
    this.getAlumnosFromService();
  }
  

}
