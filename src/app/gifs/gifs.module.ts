import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchGIFsComponent } from './search-gifs/search-gifs.component';
import { ResultsGIFsComponent } from './results-gifs/results-gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchGIFsComponent,
    ResultsGIFsComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
