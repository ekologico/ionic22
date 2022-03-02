/* 
app componentes es el raiz (?)
*/

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
 
  // nuestro js
constructor(){
  console.log("-> en el constructor")
}

ngOnInit(){
  console.log("-> en onInit")
}

}
