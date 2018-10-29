import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProfesorComponent } from '../profesor/profesor.component';
import { ClaseComponent } from './clase/clase.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    ClaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
