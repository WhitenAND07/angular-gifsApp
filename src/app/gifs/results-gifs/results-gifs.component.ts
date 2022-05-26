import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results-gifs',
  templateUrl: './results-gifs.component.html'
})
export class ResultsGIFsComponent {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) { }

}
