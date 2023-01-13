import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NaissanceHomeComponent } from './components/naissance/naissance-home/naissance-home.component';
import { NftComponent } from './pages/nft/nft.component';
import { PremiereCopieComponent } from './components/naissance/premiere-copie/premiere-copie.component';
import { NaissanceAddComponent } from './components/naissance/naissance-add/naissance-add.component';
import { AdoptionComponent } from './components/naissance/adoption/adoption.component';
import { ReconnaissanceComponent } from './components/naissance/reconnaissance/reconnaissance.component';
import { JugementComponent } from './components/naissance/jugement/jugement.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'naissance', pathMatch: 'full' },
      { path: 'premiere-copie', component: PremiereCopieComponent },
      { path: 'naissance', component: NaissanceHomeComponent },
      {path: 'nfts', component: NftComponent},
      {path: 'add-naissance', component: NaissanceAddComponent},
      {path: 'adoption-naissance', component: AdoptionComponent},
      {path: 'reconnaissance-naissance', component: ReconnaissanceComponent},
      {path: 'jugement-naissance', component: JugementComponent},
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
