import { Component, OnInit } from '@angular/core';
import { DatoEstadistica } from 'src/app/models/datoEstadistica';
import { PalabrickService } from '../../services/palabrick.service';


@Component({
  selector: 'app-pruebas-palabros',
  templateUrl: './pruebas-palabros.component.html',
  styleUrls: ['./pruebas-palabros.component.css']
})
export class PruebasPalabrosComponent implements OnInit {


  test_resultado: DatoEstadistica | null;
  test_input: number | null = 1;
  input_partida: number | null;


  /*
  variables de estadistica historico
  */
  historico_array_datos_bruto: Array<DatoEstadistica> | null;
  historico_partidas_totales: number | null;
  historico_array_seis_rondas_y_errores: Array<string>;

  historico_ronda_uno_aciertos: number | null;
  historico_ronda_dos_aciertos: number | null;
  historico_ronda_tres_aciertos: number | null;
  historico_ronda_cuatro_aciertos: number | null;
  historico_ronda_cinco_aciertos: number | null;
  historico_ronda_seis_aciertos: number | null;

  historico_fallos: number | null;



  constructor(public servicio_palabrick: PalabrickService) {

    this.historico_array_datos_bruto = null;
    this.test_resultado = null;
    this.input_partida = this.test_input;

    /*
    variables de estadistica historica
    */
    this.historico_array_seis_rondas_y_errores=[];



    this.historico_partidas_totales = null;
    this.historico_ronda_uno_aciertos = null;
    this.historico_ronda_dos_aciertos = null;
    this.historico_ronda_tres_aciertos = null;
    this.historico_ronda_cuatro_aciertos = null;
    this.historico_ronda_cinco_aciertos = null;
    this.historico_ronda_seis_aciertos = null;
    this.historico_fallos = null;


  }

  ngOnInit(): void {

    this.test_resultado = this.testDatoResultado();
 
    this.guardarDatosHistoricosCompletos(this.test_resultado);
    //guardamos los datos nuevos si la partida acaba de terminar
    if (this.input_partida == 1) {
     // this.historico_array_datos = this.obtenerDatosHistoricos();
      this.test_resultado = this.testDatoResultado();  
    }

    //calcular historicos

  }


  // arrayVueltas

  guardarDatosHistoricosCompletos(resultado: DatoEstadistica) {

    //obtenemos array
   this.historico_array_datos_bruto = this.obtenerDatosHistoricos();
    let dato: DatoEstadistica = this.testDatoResultado()
    //sumamos
    if (this.historico_array_datos_bruto == null) {
      this.historico_array_datos_bruto = new Array;
    } 

    this.historico_array_datos_bruto.push(dato);

    //guardamos
    this.servicio_palabrick.guardarDatosHistoricosCompletos(this.historico_array_datos_bruto);

  }



  obtenerDatosHistoricos(): Array<DatoEstadistica> | null {
    let respuesta: Array<DatoEstadistica> | null;
    respuesta = this.servicio_palabrick.obtenerDatosHistoricosCompletos();
    return respuesta;
  }


  calcularHistoricos(){
   // this.historico_array_seis_rondas_y_errores
    // recorrer array historicos y sumar aciertos en 1a, 2a...
    if (this.historico_array_datos_bruto!=null){

      for (let partida of this.historico_array_datos_bruto) {
        
      if (partida.resultado!=null){
        this.historico_array_seis_rondas_y_errores[1]= partida.resultado;
      }
       




      }
    }
    



    }


  testDatoResultado(): DatoEstadistica {

    let fecha: Date | number;
    fecha = Date.now();


    let devuelve: DatoEstadistica =
    {
      "resultado": "3",
      "fecha_inicio": fecha,
      "fecha_fin": 1645703592,
      "intentos": [
        {
          "palabra": "PAPEL",
          "letra1": 1,
          "letra2": -1,
          "letra3": 0,
          "letra4": 0,
          "letra5": 1
        },
        {
          "palabra": "PADEL",
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
