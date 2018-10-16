import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from'@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convertToSpaces.pipe';
import { MaterialModule } from './shared/material.module';

import { Routes,RouterModule} from '@angular/router';
const routes: Routes = [
  {path:'contactmanager',loadChildren:'./contactmanager/contactmanager.module#ContactmanagerModule'},
  {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
  {path:'products',component:ProductListComponent},
  {path:'**',redirectTo:'contactmanager'}
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ProductListComponent]
})
export class AppModule { }
