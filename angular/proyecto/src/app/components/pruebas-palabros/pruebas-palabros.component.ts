import { Component, OnInit } from '@angular/core';
import { PalabrickService } from 'src/app/services/palabrick.service.spec';

@Component({
  selector: 'app-pruebas-palabros',
  templateUrl: './pruebas-palabros.component.html',
  styleUrls: ['./pruebas-palabros.component.css']
})
export class PruebasPalabrosComponent implements OnInit {

  
  array_vueltas: Array<number>;
  /*
  observadorEstadisticas: Observer<Array>;
*/




  constructor() { 

    this.array_vueltas= [2,3,4,5,6,6,6];
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

guardarLaPartida(array_vueltas=this.array_vueltas){  
 // guardarLaPartida(array_vueltas=this.array_vueltas){  
//llamar servicio guardar partida 

/* recibe array con las veces acertadas en 1,2,3,4,5,6 o 0 
que son las erradas
*/






}

obtenerLaPartida(){
}



}
