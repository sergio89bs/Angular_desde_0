import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // DECORADOR DE INPUT
 @Input() mensaje:string;



  constructor() { 

    this.mensaje = "Variable pasada desde constructor"
    
  }

  ngOnInit(): void {
  }

}
