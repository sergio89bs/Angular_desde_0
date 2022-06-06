import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {


  clases:string
  arrayClases:string[]

  colorSemaforo:string

  constructor() { 
    // Asociamos las clases con una cadena de string (no recomendable)
    this.clases = 'semaforo rojo'
    //Trabajando con un array es mucho mas comodo y se puede modificar al gusto
    this.arrayClases = ['semaforo']
    this.arrayClases.push('verde')
    
    // Inicializo el color del semafor en verde
    this.colorSemaforo= 'v'
  }
  // Usamos ngOnit para modificar el componente con alguna funcion
  ngOnInit(): void {

    // CAMBIO DINAMICO DE LOS COLORES DEL SEMAFORO
    setInterval( ()=>{
      if(this.colorSemaforo === 'v'){

        this.colorSemaforo = 'a' }
      else if(this.colorSemaforo === 'a'){
        this.colorSemaforo = 'r'
      }
      else if (this.colorSemaforo === 'r'){
        this.colorSemaforo = 'v'
      }

    },2000)

  }

}
