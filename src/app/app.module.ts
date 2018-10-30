import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //se debe importar para que el ngModel sea una propiedad de input
import { routing, appRoutingProviders } from './app.routing'; //para el ruteado

import { AppComponent } from './app.component';

import { ProfesorComponent } from '../profesor/profesor.component';
import { ClaseComponent } from './clase/clase.component';
import { FrutaComponent } from './fruta/fruta.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    ClaseComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //idem arriba
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
