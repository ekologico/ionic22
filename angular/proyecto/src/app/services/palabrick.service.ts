import { Injectable } from '@angular/core';



/*
Servicios de guardado de estadisticas
variable en el localstorage: "palabrick_resultados"
Métodos: 
-obtener
-guardar

*/



@Injectable({
  providedIn: 'root'
})
export class PalabrickService {


  constructor() { 
   }


   obtenerDatos():Array<number> | null{
    let array_resultado2: Array<number> | null ;
    let array_resultado: string | null = localStorage.getItem('palabrick_resultados')
    if (array_resultado != null) {
  
      array_resultado2 = JSON.parse(array_resultado);
    }else{
      array_resultado2=null;
    }
    return array_resultado2;
   }


   guardarDatos(array_datos:Array<number>):void{
    localStorage.setItem('palabrick_resultados', JSON.stringify(array_datos));
    console.log("->guardado")
    console.log(JSON.stringify(array_datos));
   }

}
