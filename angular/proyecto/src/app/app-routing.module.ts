/*


*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { JuegoPptComponent } from './components/juego-ppt/juego-ppt.component';


// aqui se establece la correspondencia entre ruta y componente
const routes: Routes = [  
  {path:"dni", component: DniComponent},
  {path:"imc", component: ImcComponent },
  {path:"ppt", component: JuegoPptComponent},
  {path:"", component: ImcComponent},
  {path:"alumno", component: AlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
