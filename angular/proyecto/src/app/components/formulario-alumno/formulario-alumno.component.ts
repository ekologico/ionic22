import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';

import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';



@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  alumno: Alumno;
  en_edicion:boolean;
  observadorAlumno:Observer<Alumno> ;

  
//inyecccion de dependenencias ?
  constructor( 
    public servicio_alumnos: AlumnoService, 
    private router:Router,
    private ruta: ActivatedRoute
) {
   
    this.alumno = new Alumno();
    this.alumno.apellido = "Jones"
    this.alumno.nombre = "Indiana jr"
    this.alumno.edad = 35
    this.alumno.email = "indiana@jones.us"
    this.en_edicion=true;
   
   this.observadorAlumno=    this.observadorAlumno = 
   {
     complete: ()=>{console.log("Ha terminado");},
     error:(merror)=>{console.error("ERRor "+merror);},
     next: (alumno_nuevo)=>{
      // alert('Alumno guardado correctamente :)');
       console.log(alumno_nuevo.id);
       //navegar
       this.router.navigateByUrl("/alumno");//siempre usamos rutas relativas
     },
   };
   
   
  }

  ngOnInit(): void {

    let ruta_actual: string = location.href;  

if (this.estoyEnEdicion(ruta_actual)){
  this.en_edicion=false;
//

}else{
//estoy en 
this.en_edicion=true;
console.log ("estoy editando!");
this.alumno=this.leerAlumnoDelLocalStorage();

}
  // Juan, acceder a parametro de ruta sin subscribe
  // spapshot es la ruta actual
  //const id = this.ruta.snapshot.paramMap.get('id') || 0;
  
// la forma de hacerlo con paramMap y un observable

    this.ruta.paramMap.subscribe(
      param => {
         let id=param.get('id');
         if (id!=null)
         {
           console.log("estoy editando");          
         } else {
           console.log("estoy creando");


         }
      }
    )

  }


leerAlumnoDelLocalStorage():Alumno{
  let alumno_leido= new Alumno();
  let alumno_string= localStorage.getItem("alumno_edicion")
  if (alumno_string)
  {
    alumno_leido = JSON.parse(alumno_string)
  }
  return  alumno_leido;
}






  estoyEnEdicion(ruta_actual:string):boolean{ 
   // ruta_actual= "http://localhost:4200/alumno/form";
   
    let respuesta:boolean=false;

let aux:Array<string>= ruta_actual.split("/")
if (aux[aux.length-1]=="form") {
respuesta=true;
}

return respuesta;
  }

 

  crearAlumno(): void {
  
    console.log("crear alumno")
    //TODO: completar el post al servidor
    
    //observable
    console.log("borrar alumno")
    this.servicio_alumnos.crearAlumno(this.alumno).subscribe(
      this.observadorAlumno
    )

  }


  editarAlumno()
  {
    console.log('en editarAlumno()');

    this.servicio_alumnos.editarAlumno(this.alumno).subscribe(
      this.observadorAlumno
    )

  }



estiloBoton():string{
let estilos_boton: string ="";
if (this.en_edicion){
  estilos_boton ="btn btn-primary"
}else{
  estilos_boton ="btn btn-success"
}
return estilos_boton
   
  }

}


