import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private apiKey: string = 'qmxmoXa2i2pWNbrCpLmaskV21VzDFg8y'
  private _historial: string[] = [];

  // TODO: Cambiar any por su tipo.
  public resultados: any[] = [];

  get historial() {

    return [...this._historial];
  }

  constructor(private http: HttpClient) {

  }


  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe((res: any) => {
        console.log(res.data);
        this.resultados = res.data;
      })
  }


}
