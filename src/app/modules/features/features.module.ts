import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ScopedAComponent } from './components/scoped-a/scoped-a.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    ScopedAComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatExpansionModule,
  ]
})
export class FeaturesModule { }
