import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  num1:number;
  num2:number;
  result:number | string;

  constructor() { 
    this.num1 = 10
    this.num2 = 30
    this.result = ''
  }

  ngOnInit(): void {
  }
  sumar(){

    this.result = (this.num1+ this.num2)
    
  }

}
