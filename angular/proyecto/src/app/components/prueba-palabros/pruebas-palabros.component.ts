import { Component, OnInit } from '@angular/core';
import { DatoEstadistica } from 'src/app/models/datoEstadistica';
import { PalabrickService } from '../../services/palabrick.service';


@Component({
  selector: 'app-pruebas-palabros',
  templateUrl: './pruebas-palabros.component.html',
  styleUrls: ['./pruebas-palabros.component.css']
})
export class PruebasPalabrosComponent implements OnInit {

  test_array_datos_vueltas: Array<DatoEstadistica>;
  test_resultado: number;
  // observadorEstadisticas: Observer<Array>;



  constructor(public servicio_palabrick: PalabrickService) {
    //public servicio_palabrick: PalabrickService;
    this.test_array_datos_vueltas = [
      {
        "fecha":new Date("December 17, 2022 03:24:00"),
        "resultado":2
     },
     {
      "fecha":new Date("December 17, 2022 04:24:00"),
      "resultado":5
   },
   {
    "fecha":new Date("December 18, 2022 03:24:00"),
    "resultado":4
 }
    ]

    this.test_resultado = 1;
    //public servicio_alumnos: PalabrickService,
   // this.servicio_palabrick.guardarDatos;
    this.guardarEstadistica(this.test_resultado);
    this.mostrarEstadisticas();


    // observador para acortar código:
    /*
    this.observadorEstadisticas = this.observadorEstadisticas =
    {
      complete: () => { console.log("Ha terminado"); },
      error: (merror) => { console.error("ERRor " + merror); },
      next: (alumno_nuevo) => {
    
        console.log(alumno_nuevo.id);
        //navegar
        this.router.navigateByUrl("/alumno");//siempre usamos rutas relativas
      },
    };
*/

  }

  ngOnInit(): void {
  }


  // arrayVueltas

  guardarEstadistica(resultado: number) {
    //obtenemos array
    let array_datos: Array<DatoEstadistica> | null;
    array_datos = this.obtenerEstadistica();
    let dato:DatoEstadistica={fecha: new Date(), "resultado": resultado}
      //sumamos
    if (array_datos == null) {      
      array_datos= new Array;  
      // let aux:number = array_datos[resultado];
     //array_datos[resultado]= aux+1;
    } else {
      //primera partida      
      //array_datos[resultado]=1;
     }
     array_datos.push(dato); 

    //guardamos
  this.servicio_palabrick.guardarDatos(array_datos);

   // guardarLaPartida(array_vueltas=this.array_vueltas){  
    //llamar servicio guardar partida 

    /* recibe array con las veces acertadas en 1,2,3,4,5,6 o 0 
    que son las erradas
    */

  


  }



  obtenerEstadistica() {
    let respuesta: Array<DatoEstadistica>;
    //simulado
    respuesta = this.test_array_datos_vueltas;

    //el servicio
    

    return respuesta
  }



mostrarEstadisticas (){

console.log("--mostrarEstadisticas");
let datos_estadisticas = this.obtenerEstadistica();
console.log(datos_estadisticas);


}





}
