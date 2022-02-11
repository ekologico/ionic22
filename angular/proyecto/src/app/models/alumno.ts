export class Alumno {
    id:  number;
    nombre:	string;
    apellido:	string;
    email: 	string;
    edad:	number;
    creadoEn: string;
    fotoHashCode?: number;
    imagen_aleatoria:number;
  //  imagen2:number;
    //imagenApano: number;
   
  

constructor(){
    this.id= 0;
    this.nombre="";
    this.email="";
    this.edad = 0;
    this.apellido="";
    this.creadoEn="";
    this.imagen_aleatoria=1;
   // this.imagen2=1;
   // this.imagenApano=this.numeroAleatorio();
 
}

numeroAleatorio():number {
  let numero=  Math.random() * (99 - 1) + 1;
  console.log("nuemroooooooooooooooooooooooo"+numero)
    return numero;
}



}
