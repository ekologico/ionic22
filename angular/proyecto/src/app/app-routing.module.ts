/*


*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';

// aqui se establece la correspondencia entre ruta y componente
const routes: Routes = [  
  {path:"dni", component: DniComponent},
  {path:"imc", component: ImcComponent },
  {path:"", component: ImcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
