import { Component, OnInit, ViewChild } from '@angular/core';
import { Marcador3Component } from '../marcador3/marcador3.component';

@Component({
  selector: 'app-juego-ppt',
  templateUrl: './juego-ppt.component.html',
  styleUrls: ['./juego-ppt.component.css']
})
export class JuegoPptComponent implements OnInit {
  //estadisticas: Array<string> = [];
  //puntos_maquina: number = 0;
 // puntos_usuario: number = 0;
  seleccionado?: boolean; //para controlar si el usuario eligió jugada
  readonly FOTO_PIEDRA = "assets/imagenes-ppt/piedra.png";
  readonly FOTO_PAPEL = "/assets/imagenes-ppt/papel.png";
  readonly FOTO_TIJERA = "./assets/imagenes-ppt/tijera.png";

  ids_botones: Array<string> = ["rock", "paper", "scissors"];
  img_botones: Array<string> = ["piedra", "papel", "tijera"];


 // marcador:Marcador3Component= new Marcador3Component;

  /*
      La tabla de decision para determinar el ganador.
      Es un array bidimensional.
      Cada fila corresponde a piedra, papel y tijera, en este orden
      Cada columna corresponde al resultado de cruzar la fila correspondiente y piedra, papel y tijera en este orden
      Para acceder se necesitan dos valores, uno para la fila y otro para la columna, correspondiendo a lo seleccionado por los jugadores A y B
      0 (cero) implica un empate
      1 (uno) implica que A gana
      -1 (menos uno) implica que B gana
  */

  // tabla_decision:Array<Array<number>> = [
  tabla_decision: number[][] = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
  ];

  @ViewChild (Marcador3Component)marcador?:Marcador3Component; //para que vea al hijo

ngAfterViewInit() {
  console.log("ng viewwwww")
  //this.marcador.ponerEmpateADiez();

}


  constructor() {
    this.seleccionado = false;
    console.log("contructor juego raiz")
  }

  ngOnInit(): void {
  }


  selectPlay(play: number): void {
    console.log("Jugador selecciona su jugada");
    this.seleccionado = true;
    localStorage.setItem("selected", play.toString());
    this.decorateSelectedPlay(play);
  }


  decorateSelectedPlay(play: number) {
    console.log(play)


    let piedra = document.getElementById("piedra");
    let papel = document.getElementById("papel");
    let tijera = document.getElementById("tijera");

    if (piedra != null) {
      piedra.classList.remove("marcada");
    }

    if (papel) {
      papel.classList.remove("marcada");
    }

    if (tijera) {
      tijera.classList.remove("marcada");
    }


    let boton = document.getElementById(this.ids_botones[play]);

    if (boton) {
      boton.classList.add("marcada");
    }


  }


  getComputerPlay(): number {
    return Math.floor(Math.random() * 3);
  }



  //jugar!
  playNow() {
    this.seleccionado = false;
    //TODO mirar si player sea algo
    let computer = this.getComputerPlay();

    let player = localStorage.getItem("selected");

    if (player) {
      let result = this.tabla_decision[+player][computer];
      let img_computer = document.getElementById("computerPlay");

      if (img_computer) {
        img_computer.setAttribute("src", `./assets/imagenes-ppt/${this.img_botones[computer]}.png`);
        img_computer.setAttribute("alt", this.img_botones[computer]);
      }

      console.log(result);//MOSTRANDO EL RESULTADO
      //DE FORMA IMPLÍCITA
      // 1 GANA EL JUGADOR
      // 0 ES EMPATE
      //TODO: AÑADIR UN MARCARDOR VISUAL
      //QUE SE ACTUALICE POR CADA PARTIDA
      //Y MUESTREL EL RESULTADO DEL JUEGO

      // -1 GANA EL PC

      localStorage.removeItem("selected");
      //    result
// llama a una funcion del componente marcador
      this.marcador?.actualizarMarcador(result)

    }

  }


}








