import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html'
})
export class SearchGIFsComponent {

  constructor() {}

  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  search(){
    const valor: string = this.txtBuscar.nativeElement.value;

    console.log(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
