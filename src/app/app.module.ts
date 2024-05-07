import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module'; // Asegúrate de que el path sea correcto según tu estructura

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Añade HttpClientModule aquí
    SeriesModule // Importa el módulo de series que contiene tus componentes y servicios relacionados con las series
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
