import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsServiceService: GifsServiceService) {

  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    // Si el valor es 0 regresate y no pasas a la siguiente.no hagas nada.
    if (valor.trim().length === 0) {
      return;
    }


    this.gifsServiceService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }



}
