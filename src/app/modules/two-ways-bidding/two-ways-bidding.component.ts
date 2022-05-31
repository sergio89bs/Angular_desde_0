import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-ways-bidding',
  templateUrl: './two-ways-bidding.component.html',
  styleUrls: ['./two-ways-bidding.component.css']
})
export class TwoWaysBiddingComponent implements OnInit {

  campoTexto:string;
  persona:any;

  constructor() { 
    this.campoTexto = 'Holaaaa'
    this.persona = {
      nombre: 'Mario',
      edad: '24',
      ciudad: 'Barcelona'
    }
  }

  ngOnInit(): void {
  }

  onClick(){
    this.campoTexto='He cambiado'
  }

}
