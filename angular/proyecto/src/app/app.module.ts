import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { LayoutModule } from './layout/layout.module';
import { MenuSuperiorComponent } from './layout/menu-superior/menu-superior.component';
import { JuegoPptComponent } from './components/juego-ppt/juego-ppt.component';
import { Marcador3Component } from './components/marcador3/marcador3.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PruebasPalabrosComponent } from './components/prueba-palabros/pruebas-palabros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnoPagComponent } from './components/alumno-pag/alumno-pag.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    DniComponent,
    ImcComponent,
    JuegoPptComponent,
    Marcador3Component,
    AlumnoComponent,
    FormularioAlumnoComponent,
    PruebasPalabrosComponent,
    AlumnoPagComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule, 
    HttpClientModule, FontAwesomeModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
