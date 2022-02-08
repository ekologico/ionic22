import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador3',
  templateUrl: './marcador3.component.html',
  styleUrls: ['./marcador3.component.css']
})
export class Marcador3Component implements OnInit {

  constructor() { 
    this.seleccionado = false;
   }

  ngOnInit(): void {
  }

  puntos_maquina: number = 0;
  puntos_usuario: number = 0;
  seleccionado?: boolean; //para controlar si el usuario eligió jugada


  actualizarMarcador(result: number): void {
      switch (result) {
          case 1:
              this.puntos_usuario++
              break;
          case 0:
              this.puntos_maquina++
              break;
          default:
              this.puntos_maquina++
              this.puntos_usuario++
              break;
      }
  }


  ponerMarcadoraCero() {
      this.puntos_maquina = 0;
      this.puntos_usuario = 0;
  }

}
