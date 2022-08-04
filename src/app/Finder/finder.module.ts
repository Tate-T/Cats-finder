import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FinderComponent } from './finder.component'; 
import { HttpClientModule } from '@angular/common/http';
// import {ConverterRoutingModule} ?
@NgModule({
  declarations: [
    FinderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [FinderComponent]
})
export class FinderModule { }