export class DatoEstadistica {
    fecha: Date;
    resultado:	number | null;
       
    
constructor(resultado:number){
    this.fecha=  new Date();
    this.resultado= resultado;   
}


}
