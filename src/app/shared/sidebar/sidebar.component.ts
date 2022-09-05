import { Component } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private gifsServiceService: GifsServiceService) { }

  get historial() {
    return this.gifsServiceService.historial;
  }

  buscar(termino: string) {
    this.gifsServiceService.buscarGifs(termino);
  }

}
