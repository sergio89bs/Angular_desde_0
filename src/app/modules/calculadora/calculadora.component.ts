import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})


export class CalculadoraComponent implements OnInit {

  resultado:string;
  // Valor 0 de inico
  inicio:string

  constructor() {
    this.inicio = '0'
    this.resultado = ''
   }

  ngOnInit(): void {
  }

  tomaValor($event:any){
    this.inicio = ''
    this.resultado = this.resultado + $event.target.value
}

sumarValores($event:any){
  this.resultado = eval(this.resultado)
}

reiniciar(){
  this.resultado = ''
  this.inicio='0'
}
}
