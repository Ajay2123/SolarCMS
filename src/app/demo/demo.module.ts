import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//flex layout 
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../shared/material.module';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    
    MaterialModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule { }
