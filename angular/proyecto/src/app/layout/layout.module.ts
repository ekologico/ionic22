import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenuSuperiorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], 
  exports: [MenuSuperiorComponent]
})
export class LayoutModule { }
