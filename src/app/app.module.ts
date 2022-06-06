import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './modules/hello/hello.component';
import { PadreComponent } from './modules/padre/padre.component';
import { Hijo1Component } from './modules/hijo1/hijo1.component';
import { Hijo2Component } from './modules/hijo2/hijo2.component';
import { EventosComponent } from './modules/eventos/eventos.component';
import { CronometroComponent } from './modules/cronometro/cronometro.component';
import { CalculadoraComponent } from './modules/calculadora/calculadora.component';
import { InputComponent } from './modules/decorations/input/input.component';
import { BindingComponent } from './modules/decorations/binding/binding.component';
import { SumaDinamicaComponent } from './modules/suma-dinamica/suma-dinamica.component';
import { OutputComponent } from './modules/decorations/output/output.component';
import { TwoWaysBiddingComponent } from './modules/two-ways-bidding/two-ways-bidding.component';
import { NgStyleComponent } from './directivas/ng-style/ng-style.component';
import { NgClassComponent } from './directivas/ng-class/ng-class.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent,
    CronometroComponent,
    CalculadoraComponent,
    InputComponent,
    BindingComponent,
    SumaDinamicaComponent,
    OutputComponent,
    TwoWaysBiddingComponent,
    NgStyleComponent,
    NgClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
