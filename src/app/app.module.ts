import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './modules/hello/hello.component';
import { PadreComponent } from './modules/padre/padre.component';
import { Hijo1Component } from './modules/hijo1/hijo1.component';
import { Hijo2Component } from './modules/hijo2/hijo2.component';
import { EventosComponent } from './modules/eventos/eventos.component';
import { CronometroComponent } from './modules/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
