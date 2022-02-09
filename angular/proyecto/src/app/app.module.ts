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

@NgModule({
  declarations: [
    AppComponent,
    DniComponent,
    ImcComponent,
    JuegoPptComponent,
    Marcador3Component,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
