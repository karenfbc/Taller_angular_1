// src/app/series/series.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSeriesComponent } from './series-list/series-list.component';

@NgModule({
  declarations: [
    ListaSeriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaSeriesComponent
  ]
})
export class SeriesModule { }
