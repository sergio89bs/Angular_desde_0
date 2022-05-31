import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

 @Input() numeroInicial:number;
 contador:number;
 @Output() finalizacionCrono:EventEmitter<string>;


  constructor() {
    this.numeroInicial=0
    this.contador = 10
    this.finalizacionCrono = new EventEmitter();
   }

  ngOnInit(): void {
    this.contador = this.numeroInicial ? this.numeroInicial : 0
  }

  startContador(){

   var count = setInterval(()=>{
      this.contador--
      if(this.contador<0){
      clearInterval(count)
      this.contador = this.numeroInicial
      // Pasamos la notificacion al componenete padre de la finalizacion del cronometro
      this.finalizacionCrono.emit('El cronometro del contador ' + this.numeroInicial + ' ha finalizado')
      }
     },1000)
    return this.contador
  }

}
