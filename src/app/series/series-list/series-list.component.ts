// src/app/series/lista-series/lista-series.component.ts
import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class ListaSeriesComponent implements OnInit {
  series: Serie[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
      this.actualizarPromedio();
    });
  }

  actualizarPromedio(): void {
    const totalTemporadas = this.series.reduce((acc, serie) => acc + serie.temporadas, 0);
    const promedio = totalTemporadas / this.series.length;
    // Actualiza el DOM o muestra el promedio como sea necesario
  }
}
