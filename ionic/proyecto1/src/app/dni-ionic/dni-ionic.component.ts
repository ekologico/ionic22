import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInput, IonRadioGroup, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dni-ionic',
  templateUrl: './dni-ionic.component.html',
  styleUrls: ['./dni-ionic.component.scss'],
})
export class DniIonicComponent implements OnInit {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  letra: string;
  static readonly SECUENCIA_LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

  @ViewChild('radio') padre_radio: IonRadioGroup;
  @ViewChild('dni') dni: IonInput;

  ngOnInit() {
    //this.presentAlert();
    //this.presentAlertConfirm();

    //this.titulo = "CALCULAR LA LETRA DEL DNI";
    this.letra = "";
  }

  //SI una operación es asíncora, puedo usar await
  //para invocarla "normalmente"
  //Si una una función usa await, debe declar async en su cabecera

  

  calculaLetraDni() {
    console.log("estoy en el init");
    console.log("valor radio = " + this.padre_radio.value);
    console.log("valor dni = " +this.dni.value);


    if (this.dni.value) {
      console.log("valor sleccionado" + this.padre_radio.value);
      console.log("numero" + this.dni.value);
      let numero = parseInt(this.padre_radio.value + this.dni.value);
      let resto : number = numero % 23;
      this.letra = DniIonicComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
      this.infoLetra();
    
    } else {
      this.avisoError();
    }
  }

  async infoLetra() {
    const toast = await this.toastController.create({
      message: 'Su letra es ' + this.letra,
      duration: 2000
    });
    toast.present();
  }

  async avisoError() {
    const toast = await this.toastController.create({
      message: 'Introduzca un DNI válido',
      duration: 2000
    });
    await toast.present();
    console.log("se ha hecho algo");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'AVISO',
      subHeader: 'IMPORTANTE',
      message: 'HOY ES LUNES :)',
      buttons: ['OK', 'KO']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
