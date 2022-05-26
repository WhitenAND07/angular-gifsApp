import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root' //Esta propiedad provoca que dicho servicio sea global para nuestra aplicación
})
export class GifsService {
  private apiKey : string = '5O6GCOtBO8698RPaBjwz6OHTBvahIPtG';
  private _historial: string[] = [];
  
  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGIFs(valorSearch: string){
    if (valorSearch.trim().length === 0) {return;}

    valorSearch = valorSearch.trim().toLowerCase();

    if(!this._historial.includes(valorSearch)){
      this._historial.unshift(valorSearch);
      this._historial = this._historial.splice(0,10);
    }
  
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=5O6GCOtBO8698RPaBjwz6OHTBvahIPtG&q=${valorSearch}&limit=10`)
      .subscribe((resp) => {
        this.resultados = resp.data;
      });
  }
}
