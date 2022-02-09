import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/marcador';

@Component({
  selector: 'app-marcador3',
  templateUrl: './marcador3.component.html',
  styleUrls: ['./marcador3.component.css']
})
export class Marcador3Component implements OnInit {

  constructor() { 
   // this.seleccionado = false;
    console.log("contructor marcador")
   }

  ngOnInit(): void {

this.leerMarcadorGuardado()

    let datos_temporal: Ronda;
    let datos_string: string | null = localStorage.getItem('tabla_historicos_ppt')

    //let array_temporal: Array<Imc> = new Array<Imc>();
    let string_datos: string | null = localStorage.getItem('tabla_historicos_ppt')
    if (string_datos != null) {
      string_datos = JSON.parse(string_datos);
    }
   

    console.log("string_datos")
   console.log(string_datos)
   
  }

  leerMarcadorGuardado(){
 
   let aux_puntos_maq= localStorage.getItem('puntos_pc_ppt')
if (aux_puntos_maq){
  this.puntos_maquina=+aux_puntos_maq;
}

let aux_puntos_pc= localStorage.getItem('puntos_usuario_ppt')
if (aux_puntos_pc){
  this.puntos_maquina=+aux_puntos_pc;
}


  }

  ngOndestroy(){
  //deja de ser visiblw
    this.ronda = new Ronda(this.puntos_maquina,this.puntos_usuario)
    //this.tabla_resultados.push(this.ronda)
    localStorage.setItem('tabla_historicos_ppt', JSON.stringify(this.ronda ));
    localStorage.setItem('puntos_usuario_ppt', JSON.stringify(this.puntos_maquina));
    localStorage.setItem('puntos_pc_ppt', JSON.stringify(this.puntos_usuario ));
  }

 
  ronda:Ronda | null = new Ronda(0,0);
  //tabla_resultados: Array <Ronda>= []
  puntos_maquina: number = 0;
  puntos_usuario: number = 0;
  seleccionado?: boolean; //para controlar si el usuario eligió jugada

 //DE FORMA IMPLÍCITA
      // 1 GANA EL JUGADOR
      // 0 ES EMPATE
      //TODO: AÑADIR UN MARCARDOR VISUAL
      //QUE SE ACTUALICE POR CADA PARTIDA
      //Y MUESTREL EL RESULTADO DEL JUEGO

      // -1 GANA EL PC
  actualizarMarcador(result: number): void {
      switch (result) {
          case 1:
              this.puntos_usuario++
              break;
          case 0:
              this.puntos_maquina++
              this.puntos_usuario++
              break;
          default:
             
              this.puntos_maquina++
              break;
      }

 
      
  }


  ponerMarcadoraCero() {
      this.puntos_maquina = 0;
      this.puntos_usuario = 0;
  }

  ponerEmpateADiez() {
    this.puntos_maquina = 101;
    this.puntos_usuario = 101;
}

}



export class Ronda {
  puntos_maquina:number;
  puntos_usuario:number;


  constructor(puntos_maquina:any,puntos_usuario:any) { 
  this.puntos_maquina=puntos_maquina;
  this.puntos_usuario=puntos_usuario;
   }


  serializar (){
   // return JSON.stringify(this.puntos_maquina, this.puntos_usuario )
  } 

  }
