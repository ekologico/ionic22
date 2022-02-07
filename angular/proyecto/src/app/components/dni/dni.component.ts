import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {
  //PROPIEDADES 


  //FUNCIONES O MÉTODOS

  titulo: string;
  letra: string;
  //numero: number; // union types
  numero: number | null ; // union types
  static readonly array_letras = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e"]


  constructor() {
    this.titulo = "Calcule su letra de DNI"
    this.letra="";
    this.numero= 523821 ;
    console.log("-> en el constructor dni")
  }

  ngOnInit(): void {
    console.log("-> en onInit dni")
  }

  calcularLetraDni(){
    console.log("->calularDNI "+this.numero);

 if (this.numero  != null) {  let resto = this.numero % 23
  console.log(resto)
  console.log(DniComponent.array_letras[resto])
  this.letra = DniComponent.array_letras[resto]
}
    
  

  }




}
