import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ProductListComponent]
})
export class AppModule { }
