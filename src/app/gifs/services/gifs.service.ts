import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Esta propiedad provoca que dicho servicio sea global para nuestra aplicación
})
export class GifsService {

  private _historial: string[] = [];
  
  get historial(){
    return [...this._historial];
  }

  constructor() {}

  buscarGIFs(valorSearch: string){
    if (valorSearch.trim().length === 0) {return;}

    valorSearch = valorSearch.trim().toLowerCase();

    if(!this._historial.includes(valorSearch)){
      this._historial.unshift(valorSearch);
      this._historial = this._historial.splice(0,10);
    }
  }
}
