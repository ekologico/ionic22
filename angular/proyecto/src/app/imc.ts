import { TipoImc } from "./tipo-imc";

export class Imc {

    peso:number;
    estatura: number;
    numerico: number;
    nombre: string;
    imc:number;
    nominal: TipoImc;
    foto: string;
    lectura: string;



    constructor(){
        
        this.nominal=TipoImc.DESNUTRIDO;
        this.imc=0;
        this.peso=70;
        this.estatura=1.70;
        this.numerico=0;
        this.nombre="";
        this.foto="";
        this.lectura="";
    }







}
