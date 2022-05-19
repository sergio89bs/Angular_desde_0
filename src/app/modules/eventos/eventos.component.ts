import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})


export class EventosComponent implements OnInit {

 
  option:string;
  img:any;

  /* --------------- Inicializo las varibles con el constructor --------------- */
  constructor() { 
   
    this.option = 'Paris'
  }

  ngOnInit(): void {

  }


  // FUNCION PARA CAPTURAR EL VALOR DE UN OPTION SELECT
  onChange($event:any){    
    this.option = $event.target.value  
  }
  onBlur($event:any){
    this.option = $event.target.value
  }
  

addImg(){
  
this.img = "./assets/images/nar.jpg";
}
removeImg(){
  this.img = ""
}

}

