import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'saludo-hello-word',// Selector del componente
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  // USO DE PROPIEDADES DENTRO DEL COMPONENTE
  mensaje:string;
  cambioId:number | string;
  

  constructor() { 
    this.mensaje = 'Soy una propiedad, llamada desde el constructor de mi clase saludo';
    this.cambioId = 1;  
    
      setTimeout(()=>{
        this.cambioId = 'Ahora cambio el valor del id';
      },3000)      

  }
  

  ngOnInit(): void {
  }

  // FUNCION QUE SERA LLAMADA DESDE EL HTML

  saludar(saludo:string):string {

    return saludo;
    
  }

  manipularId(){  
   return this.cambioId
  }
}
