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
  input_partida: DatoEstadistica | null;


  /*
  variables de estadistica historico
  */
  historico_array_datos_bruto: Array<DatoEstadistica> | null;
  //historico_partidas_totales: number | null;
  historico_array_seis_rondas_y_errores: Array<number>;
  historico_array_seis_rondas_y_errores_porcentajes: Array<number>;
  historico_partidas_totales: number;
  historico_porcentaje_aciertos: number;



  constructor(public servicio_palabrick: PalabrickService) {
    this.historico_partidas_totales = 0;
    this.historico_array_datos_bruto = null;
    this.test_resultado = null;
    this.input_partida = null;
    this.historico_porcentaje_aciertos=0;


    /*
    variables de estadistica historica
    */
    this.historico_array_seis_rondas_y_errores = [0, 0, 0, 0, 0, 0, 0];
    this.historico_array_seis_rondas_y_errores_porcentajes = [0, 0, 0, 0, 0, 0, 0];


  }

  ngOnInit(): void {

    this.input_partida = this.testDatoResultado();

    this.guardarDatosHistoricosCompletos(this.input_partida);
    //guardamos los datos nuevos si la partida acaba de terminar
    
   

    this.input_partida=this.testDatoResultado();

    //calcular historicos
    this.calcularHistoricos();
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


  calcularHistoricos() {
    // this.historico_array_seis_rondas_y_errores
    // recorrer array historicos y sumar aciertos en 1a, 2a...
    if (this.historico_array_datos_bruto != null) {

      for (let partida of this.historico_array_datos_bruto) {

          switch (partida.resultado) {

            case 0:
              this.historico_array_seis_rondas_y_errores[0] += 1;
              break;
            case 1:
              this.historico_array_seis_rondas_y_errores[1] += 1;
              break;

            case 2:
              this.historico_array_seis_rondas_y_errores[2] += 1;
              break;

            case 3:
             // console.log("---->---->")
             this.historico_array_seis_rondas_y_errores[3] += 1;
            //  this.historico_array_seis_rondas_y_errores[3] += 1;
             // console.log(this.historico_array_seis_rondas_y_errores[3]);
              break;

            case 4:
              this.historico_array_seis_rondas_y_errores[4] +=1;
              break;

            case 5:
              this.historico_array_seis_rondas_y_errores[5] += 1;
              break;

            case 6:
              this.historico_array_seis_rondas_y_errores[6] += 1;
              break;

          } //switch

        } //for

      }  //if


      this.calcularPartidasTotales()
      this.calcularPorcentajes_rondas()
      this.calcular_porcentaje_aciertos_total();
    }
  

    calcularPartidasTotales():void{
      for (let ronda of this.historico_array_seis_rondas_y_errores) {
        this.historico_partidas_totales +=  ronda;
       }
    }


    calcularPorcentajes_rondas():void{
      let i: number = 0;
          for (let ronda of this.historico_array_seis_rondas_y_errores) {   

              this.historico_array_seis_rondas_y_errores_porcentajes[i]= Math.round((ronda*10)/this.historico_partidas_totales); 
              console.log( "porcierto de la ronda  "+i)
              console.log( this.historico_array_seis_rondas_y_errores_porcentajes[i])
              i++;          
          }
    }

    calcular_porcentaje_aciertos_total(){

this.historico_porcentaje_aciertos = Math.round(((this.historico_partidas_totales-this.historico_array_seis_rondas_y_errores[0])*100)/this.historico_partidas_totales)

//Math.round((((this.historico_partidas_totales) - (this.historico_array_seis_rondas_y_errores_porcentajes[0]))*10)/this.historico_partidas_totales); 
console.log(this.historico_array_seis_rondas_y_errores_porcentajes[0] );
    }


  /**********************
 ******************  TEST
 ************************/




  // simulando que es un dato en el input
  testDatoResultado(): DatoEstadistica {
    let boleo:number= Math.round(Math.random() * (6 - 0) + 0);

    let fecha: Date | number;
    fecha = Date.now();


    let devuelve: DatoEstadistica =
    {
      "resultado_palabra":"PAPEL",
      "resultado": boleo,
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





  // array de datos test



/*
  testDatosInicio(): Array<DatoEstadistica> {

    let test_array_datos_vueltas: Array<DatoEstadistica> = [
      {
        "resultado": 2,
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
        "resultado": 4,
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


  contador(i: number) {
    return new Array(i);
  }
*/


}
