import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso_angular';
  numerosCrono:number[];

  constructor(){
   this.numerosCrono = [1,33,98];
  }

  avisamePadre($event: any){
    console.log($event);
  }
}
