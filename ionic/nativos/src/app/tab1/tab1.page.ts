import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit{
  @ViewChild('radio') padre_radio: IonRadioGroup;

  constructor() {}
  

  ngOnInit(): void {
    //this.infoStatusRed();
    Network.addListener('networkStatusChange', (status) => {
      //console.log('Network status changed', status);
      this.actualizarEstado(status);
    });

  }

  ngAfterViewInit(): void {
    //ya se ha renderizado el html (ya existe el radio :)
    this.infoStatusRed();
  }


  async infoStatusRed ()//estado inicial
  {
    //Network.getStatus().then((status)=>this.actualizarEstado(status))

    let status:ConnectionStatus = await Network.getStatus();
    this.actualizarEstado(status);
  
  }

  actualizarEstado (estatus:ConnectionStatus)//cuando cambia
  {
    
    alert (`${estatus.connectionType} ${estatus.connected}`);
    this.padre_radio.value=estatus.connectionType;
  }

}






/*


import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild('radio') padre_radio: IonRadioGroup;



  constructor() {}
  
   ngOnInit(): void {
    this.infoStatusRed();

  }

  async infoStatusRed ()
  {
    let status:ConnectionStatus = await Network.getStatus();
    



    alert (`${status.connectionType} ${status.connected}`);
    this.padre_radio = true;
  
  }

*/


