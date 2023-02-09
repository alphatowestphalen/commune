import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NaissanceHomeComponent } from './components/naissance/naissance-home/naissance-home.component';
import { PremiereCopieComponent } from './components/naissance/premiere-copie/premiere-copie.component';
import { NaissanceAddComponent, AfficheCopieComponent } from './components/naissance/naissance-add/naissance-add.component';
import { AdoptionComponent } from './components/naissance/adoption/adoption.component';
import { JugementComponent } from './components/naissance/jugement/jugement.component';
import { ReconnaissanceComponent } from './components/naissance/reconnaissance/reconnaissance.component';
import { PremiereCopieVoirComponent } from './components/naissance/premiere-copie-voir/premiere-copie-voir.component';
import { AdoptionAddComponent } from './components/naissance/adoption/adoption-add/adoption-add.component';
import { AdoptionVoirComponent } from './components/naissance/adoption/adoption-voir/adoption-voir.component';
import { JugementAddComponent } from './components/naissance/jugement/jugement-add/jugement-add.component';
import { JugementVoirComponent } from './components/naissance/jugement/jugement-voir/jugement-voir.component';
import { ReconnaissanceAddComponent } from './components/naissance/reconnaissance/reconnaissance-add/reconnaissance-add.component';
import { ReconnaissanceVoirComponent } from './components/naissance/reconnaissance/reconnaissance-voir/reconnaissance-voir.component';
import { MatTableComponent } from './pages/mat-table/mat-table.component';
import { CopieComponent } from './pages/copie/copie.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NaissanceHomeComponent,
    PremiereCopieComponent,
    NaissanceAddComponent,
    AdoptionComponent,
    JugementComponent,
    ReconnaissanceComponent,
    PremiereCopieVoirComponent,
    AfficheCopieComponent,
    AdoptionAddComponent,
    AdoptionVoirComponent,
    JugementAddComponent,
    JugementVoirComponent,
    ReconnaissanceAddComponent,
    ReconnaissanceVoirComponent,
    MatTableComponent,
    CopieComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,
    MatPaginatorModule,
    MatInputModule,
    NgApexchartsModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class DashboardModule {}
