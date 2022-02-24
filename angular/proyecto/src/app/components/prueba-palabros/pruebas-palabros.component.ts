import { Component, OnInit } from '@angular/core';
import { DatoEstadistica } from 'src/app/models/datoEstadistica';
import { PalabrickService } from '../../services/palabrick.service';


@Component({
  selector: 'app-pruebas-palabros',
  templateUrl: './pruebas-palabros.component.html',
  styleUrls: ['./pruebas-palabros.component.css']
})
export class PruebasPalabrosComponent implements OnInit {

  test_array_datos_vueltas: Array<DatoEstadistica> |null;
  test_resultado: DatoEstadistica | null;




  constructor(public servicio_palabrick: PalabrickService) {

    this.test_array_datos_vueltas = null;
    this.test_resultado = null;
    this.mostrarEstadisticas();
  }

  ngOnInit(): void {
    this.test_array_datos_vueltas = this.testDatosInicio();
    this.test_resultado= this.testDatoResultado();
    this.guardarEstadistica(this.test_resultado);
  }


  // arrayVueltas

  guardarEstadistica(resultado: DatoEstadistica) {

    //obtenemos array
    let array_datos: Array<DatoEstadistica> | null;
    array_datos = this.obtenerEstadistica();
    let dato: DatoEstadistica = this.testDatoResultado()
    //sumamos
    if (array_datos == null) {
      array_datos = new Array;
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



  obtenerEstadistica(): Array<DatoEstadistica> | null{
    let respuesta: Array<DatoEstadistica>|null;
  
    //simulado

    respuesta = this.servicio_palabrick.obtenerDatos();
   // respuesta = this.testDatosInicio();

    //el servicio


    return respuesta;
  }



  mostrarEstadisticas() {

    console.log("--mostrarEstadisticas");
    let datos_estadisticas = this.obtenerEstadistica();
    console.log(datos_estadisticas);


  }


testDatoResultado():DatoEstadistica{

  let devuelve:DatoEstadistica= 
  {
        "resultado": "2",
        "fecha_inicio": 1645703575,
        "fecha_fin": 1645703592,
        "intentos": [
            {
                "palabra": "HELIO",
                "letra1": 1,
                "letra2": -1,
                "letra3": 0,
                "letra4": 0,
                "letra5": 1
            },
            {
                "palabra": "HUEVO",
                "letra1": 1,
                "letra2": 1,
                "letra3": 1,
                "letra4": 1,
                "letra5": 1
            }
        ]
    }

    return devuelve;
}


  testDatosInicio(): Array<DatoEstadistica> {
    
    /*
    let boleo= Math.floor(Math.random() * 10)+1;
    let boleo2= Math.floor(Math.random() * 10)+10;
    let boleo3= Math.floor(Math.random() * 10)+20;
*/
    
    let test_array_datos_vueltas: Array<DatoEstadistica> = [
      {
        "resultado": "2",
        "fecha_inicio": 1645703575,
        "fecha_fin": 1645703592,
        "intentos": [
            {
                "palabra": "HELIO",
                "letra1": 1,
                "letra2": -1,
                "letra3": 0,
                "letra4": 0,
                "letra5": 1
            },
            {
                "palabra": "HUEVO",
                "letra1": 1,
                "letra2": 1,
                "letra3": 1,
                "letra4": 1,
                "letra5": 1
            }
        ]
    },
    {
      "resultado": "4",
      "fecha_inicio": 1645703576,
      "fecha_fin": 1645703593,
      "intentos": [
          {
              "palabra": "HELIO",
              "letra1": 1,
              "letra2": -1,
              "letra3": 0,
              "letra4": 0,
              "letra5": 1
          },
          {
              "palabra": "HUEVO",
              "letra1": 1,
              "letra2": 1,
              "letra3": 1,
              "letra4": 1,
              "letra5": 1
          }
      ]
  }
    ]

    return test_array_datos_vueltas;
  }






}
