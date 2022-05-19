import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma-dinamica',
  templateUrl: './suma-dinamica.component.html',
  styleUrls: ['./suma-dinamica.component.css']
})
export class SumaDinamicaComponent implements OnInit {

  @Input() num1:string;
  @Input() num2:number;
  result:number

  constructor() { 
    this.num1 = '10'
    this.num2 = 89
    this.result =0
  }

  ngOnInit(): void {

   
  }
    // FUNCION PARA SUMAR
    sumar(){
      var numero1 = parseInt(this.num1)    
      this.result = numero1 + this.num2
       
    }
    }


