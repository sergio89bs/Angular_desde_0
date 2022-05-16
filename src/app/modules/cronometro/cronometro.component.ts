import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {


  contador:number
  constructor() {
    this.contador = 10
   }

  ngOnInit(): void {
  }

  startContador(){

   var count = setInterval(()=>{
      this.contador--
      if(this.contador===0){
      clearInterval(count)
      }
     },1000)
    return this.contador
  }

}
