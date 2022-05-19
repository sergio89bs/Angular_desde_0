import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

 @Input() numeroInicial:number;
 contador:number;


  constructor() {
    this.numeroInicial=0
    this.contador = 10
   }

  ngOnInit(): void {
    this.contador = this.numeroInicial ? this.numeroInicial : 0
  }

  startContador(){

   var count = setInterval(()=>{
      this.contador--
      if(this.contador===0){
      clearInterval(count)
      this.contador = this.numeroInicial
      }
     },1000)
    return this.contador
  }

}
