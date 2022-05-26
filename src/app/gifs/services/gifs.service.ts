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
    this._historial.unshift(valorSearch);
  }

}
