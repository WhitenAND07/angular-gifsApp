import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html'
})
export class SearchGIFsComponent {

  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search(){
    const valor = this.txtSearch.nativeElement.value;

    this.gifsService.buscarGIFs(valor);

    this.txtSearch.nativeElement.value = '';
  }
}
