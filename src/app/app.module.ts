import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from'@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convertToSpaces.pipe';
import { MaterialModule } from './shared/material.module';
import { MatIconModule } from '@angular/material';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    MatIconModule

  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ProductListComponent]
})
export class AppModule { }
