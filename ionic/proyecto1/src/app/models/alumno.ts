export class Alumno {

    //Debe existir una conconrdancia
    //entre el atributo JSON y el atributo
    //de la clase para que se deseriaice bien
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    edad?: number;
    creadoEn: string;
    fotoHashCode?: number;

    constructor ()
    {
        this.id=0;
        this.nombre='';
        this.apellido='';
        //this.edad=0;
        this.email='';
        this.creadoEn='';

    }

}
