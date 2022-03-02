import { Component, OnInit, ViewChild } from '@angular/core';
import { Imc } from 'src/app/imc';
import { TipoImc } from 'src/app/tipo-imc';
import { GraficoComponent } from '../grafico/grafico.component';







@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {
  oimc: Imc;
  array_imc: Array<Imc>;
  ultima_vez: string | null;
  hoy: Date;
  scontador: string | null;
  ncontador: number | null;

  mediaimc:number;
  maximoimc:number;
  minimoimc:number;

  @ViewChild(GraficoComponent) hijo_grafico!:GraficoComponent;

  constructor() {

    this.mediaimc=0;
    this.maximoimc=0;
    this.minimoimc=0;
    this.oimc = new Imc();
    this.array_imc = new Array<Imc>();
    this.ultima_vez = localStorage.getItem('ultima_visita');
    this.hoy = new Date();
    this.scontador = localStorage.getItem('contador');

    console.log("prueba  " + this.scontador + " veces")
    this.ncontador = 0;




  }

  ngOnInit(): void {
    this.obtenerYactualizarContador();
    this.array_imc = this.obtenerHistoricos();

    localStorage.setItem('ultima_visita', String(new Date()));
    localStorage.setItem('contador', String(this.ncontador));

  }

  calcularImc() {


    this.oimc.imc = Math.round(this.oimc.peso / (this.oimc.estatura * this.oimc.estatura))
    //anadir a array


    // imagenes aqui:

    if (this.oimc.imc < 16) {

      this.oimc.nominal = TipoImc.DESNUTRIDO;
      this.oimc.foto = "./assets/Desnutrido.jpeg"
      this.oimc.lectura = ""

    } else if ((this.oimc.imc >= 16) && (this.oimc.imc < 18)) {
      this.oimc.nominal = TipoImc.DELGADO;
      this.oimc.foto = "assets/Desnutrido.jpeg"
      this.oimc.lectura = TipoImc[TipoImc.DELGADO];
      // this.oimc.foto="assets/ideal.jpg";


    } else if ((this.oimc.imc >= 18) && (this.oimc.imc < 25)) {
      this.oimc.nominal = TipoImc.IDEAL;
      this.oimc.foto = "./assets/Ideal.jpeg"
      this.oimc.lectura = TipoImc[TipoImc.IDEAL];

    } else if ((this.oimc.imc >= 25) && (this.oimc.imc < 31)) {
      this.oimc.nominal = TipoImc.SOBREPESO;
      this.oimc.foto = "./assets/Sobrepeso.jpeg"
      this.oimc.lectura = TipoImc[TipoImc.SOBREPESO];

    } else if ((this.oimc.imc >= 31)) {
      this.oimc.nominal = TipoImc.OBESO;
      this.oimc.foto = "./assets/Obeso.jpeg"
      this.oimc.lectura = TipoImc[TipoImc.OBESO];
    }


    let imc_nuevo: Imc = this.clonarImc(this.oimc)
    this.array_imc.push(imc_nuevo);
    // console.log(this.array_imc)
    this.mostrarArray(this.array_imc);


    localStorage.setItem('tabla_imc_historicos', JSON.stringify(this.array_imc));
    console.log(JSON.stringify(this.array_imc));



    this.mediaimc= this.calcularMedia(this.array_imc);
    this.maximoimc= this.calcularMaximo(this.array_imc);
    this.minimoimc= this.calcularMinimo(this.array_imc);

    this.hijo_grafico.actualizaGraficos(this.mediaimc,this.maximoimc, this.minimoimc );



  }

  clonarImc(imc_viejo: Imc): Imc {
    let imc_nuevo: Imc = new Imc()
    imc_nuevo.estatura = imc_viejo.estatura
    imc_nuevo.peso = imc_viejo.peso
    imc_nuevo.imc = imc_viejo.imc
    imc_nuevo.nominal = imc_viejo.nominal
    imc_nuevo.foto = imc_viejo.foto
    imc_nuevo.lectura = imc_viejo.lectura

    return imc_nuevo;
  }


  mostrarArray(array: Array<Imc>): void {
    array.forEach(itemimc => {
      console.log(itemimc.peso);
    });


  }


  obtenerYactualizarContador(): void {
    if (this.scontador != null) { this.ncontador = parseInt(this.scontador) }

    if (this.ncontador != null) {
      this.ncontador++;
      localStorage.setItem('contador', String(this.ncontador));
    } else {
      this.ncontador = 1;
    };
    console.log("has entrado " + this.ncontador + " veces")
  }


  obtenerHistoricos(): Array<Imc> {
    let array_temporal: Array<Imc> = new Array<Imc>();
    let string_datos: string | null = localStorage.getItem('tabla_imc_historicos')
    if (string_datos != null) {
      array_temporal = JSON.parse(string_datos);
    }
    return array_temporal;
    /*
        if (localStorage.getItem('tabla_imc_historicos') != null && (localStorage.getItem('tabla_imc_historicos'))){ 
        this.array_imc = JSON.parse(localStorage.getItem('tabla_imc_historicos'));
      }
      */
   
  }

  ordenarPorAtributo(atributo: string): void {
    const variable: string = atributo;
   //  this.array_imc.sort(function(a,b){return a.[variable] - b.atributo});
  }

  ordenarPorPeso(): void {
    this.array_imc.sort(function (a, b) { return a.peso - b.peso });
  }

  // TODO: usar map sobre el array original para obtener el nuevo array sunando a todos 1kg

  subirUnKilo(): void {
    let nuevo_array:Array<Imc>= new Array<Imc>();

   nuevo_array=  this.array_imc.map(function (imc) {
      imc.peso += 1;
      return imc;
    });

    this.array_imc =nuevo_array;
    console.log(nuevo_array)

    // mejorar con formula 1

  }


  //TODO: hacer calcularMedia Maximo y Minimo de IMC
  calcularMedia (array1:Array<Imc>):number
  {
    let media = 0;
    let total = 0;

      array1.forEach(oimc=> {
        total = total + oimc.imc;
      });

      media = total/array1.length;

    return media;

  }

  calcularMinimo (array1:Array<Imc>):number
  {
    let minimo = array1[0].imc;

    array1.forEach(oimc=> {
      if (oimc.numerico<minimo)
      {
        minimo=oimc.imc;
      }
    });
      
    return minimo;

  }

  calcularMaximo (array1:Array<Imc>):number
  {
    let maximo = array1[0].imc;

    array1.forEach(oimc=> {
      if (oimc.numerico>maximo)
      {
        maximo=oimc.imc;
      }
    });
      
    return maximo;

  }

  

} // fib de la clase













