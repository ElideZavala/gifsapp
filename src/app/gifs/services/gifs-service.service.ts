import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private apiKey: string = 'qmxmoXa2i2pWNbrCpLmaskV21VzDFg8y'
  private url: string = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=dragon ball z&limit=10`
  private _historial: string[] = [];

  get historial() {

    return [...this._historial];
  }

  constructor(private http: HttpClient) {

  }


  buscarGifs(query: string) {

    // Almacenar todo en minusculas
    query = query.trim().toLowerCase();

    // buscar si en el array de historial ya no se encuentra el nuevo query.
    if (!this._historial.includes(query)) {
      // agregaremos el valor al arreglo en la primera posicion.
      this._historial.unshift(query);
      // Cortar el arreglo principal del 0 al 10
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get(this.url)
      .subscribe((res: any) => {
        console.log(res);
      })
  }


}
