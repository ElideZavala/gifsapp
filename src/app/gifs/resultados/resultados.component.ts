import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';
import { SearchGifsResponse } from '../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsServiceService) { }

}
