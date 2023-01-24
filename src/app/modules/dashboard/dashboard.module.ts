import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NftComponent } from './pages/nft/nft.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NftSingleCardComponent } from './components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from './components/nft/nft-dual-card/nft-dual-card.component';
import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { NftAuctionsTableComponent } from './components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftAuctionsTableItemComponent } from './components/nft/nft-auctions-table-item/nft-auctions-table-item.component';
import { NaissanceHomeComponent } from './components/naissance/naissance-home/naissance-home.component';
import { PremiereCopieComponent } from './components/naissance/premiere-copie/premiere-copie.component';
import { NaissanceAddComponent, AfficheCopieComponent } from './components/naissance/naissance-add/naissance-add.component';
import { AdoptionComponent } from './components/naissance/adoption/adoption.component';
import { JugementComponent } from './components/naissance/jugement/jugement.component';
import { ReconnaissanceComponent } from './components/naissance/reconnaissance/reconnaissance.component';
import { PremiereCopieVoirComponent } from './components/naissance/premiere-copie-voir/premiere-copie-voir.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NftComponent,
    NftSingleCardComponent,
    NftDualCardComponent,
    NftChartCardComponent,
    NftHeaderComponent,
    NftAuctionsTableComponent,
    NftAuctionsTableItemComponent,
    NaissanceHomeComponent,
    PremiereCopieComponent,
    NaissanceAddComponent,
    AdoptionComponent,
    JugementComponent,
    ReconnaissanceComponent,
    PremiereCopieVoirComponent,
    AfficheCopieComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
    MatStepperModule,
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
