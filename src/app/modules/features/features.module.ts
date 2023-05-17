import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { FeaturesRoutingModule } from './features-routing.module';
import { ScopedAComponent } from './components/scoped-a/scoped-a.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScopedBComponent } from './components/scoped-b/scoped-b.component';
import { LayoutModule } from '../layout/layout.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ScopedAComponent, ScopedBComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    LayoutModule,
    MatPaginatorModule,
    DashboardModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class FeaturesModule {}
