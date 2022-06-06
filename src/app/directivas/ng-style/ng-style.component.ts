import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  // Para declarar un objeto
 estilos:any
 estiBoton:any
 tamanyo:any

  constructor() { 
    this.estilos = {
      color:'blue',
      fontSize: '20px'
    }

    this.estiBoton ={
      color: ''
    }

    this.tamanyo = {
      fontSize: ''
    }
  }

  ngOnInit(): void {
  }

  cambiaColor(colorBtn){

    switch (colorBtn) {
      case 'blue':
        this.estiBoton.color = 'blue'
        break;
      case 'red':
        this.estiBoton.color = 'red'
        break;
      case 'orange':
        this.estiBoton.color = 'orange'
        break;    
      default:
        this.estiBoton.color = 'green'
        break;
    }
    }

    moveInput($event){
    
      // console.log($event.target.value);
      this.tamanyo.fontSize = `${$event.target.value}px`
    }
  
  }

