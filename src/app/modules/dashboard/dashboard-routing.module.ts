import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NaissanceHomeComponent } from './components/naissance/naissance-home/naissance-home.component';
import { PremiereCopieComponent } from './components/naissance/premiere-copie/premiere-copie.component';
import { NaissanceAddComponent } from './components/naissance/naissance-add/naissance-add.component';
import { AdoptionComponent } from './components/naissance/adoption/adoption.component';
import { ReconnaissanceComponent } from './components/naissance/reconnaissance/reconnaissance.component';
import { JugementComponent } from './components/naissance/jugement/jugement.component';
import { PremiereCopieVoirComponent } from './components/naissance/premiere-copie-voir/premiere-copie-voir.component';
import { AdoptionAddComponent } from './components/naissance/adoption/adoption-add/adoption-add.component';
import { JugementAddComponent } from './components/naissance/jugement/jugement-add/jugement-add.component';
import { ReconnaissanceAddComponent } from './components/naissance/reconnaissance/reconnaissance-add/reconnaissance-add.component';
import { AdoptionVoirComponent } from './components/naissance/adoption/adoption-voir/adoption-voir.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'naissance', pathMatch: 'full' },
      { path: 'premiere-copie', component: PremiereCopieComponent },
      { path: 'naissance', component: NaissanceHomeComponent },
      {path: 'add-naissance', component: NaissanceAddComponent},
      {path: 'add-adoption', component: AdoptionAddComponent},
      {path: 'add-jugement', component: JugementAddComponent},
      {path: 'add-reconnaissance', component: ReconnaissanceAddComponent},
      {path: 'adoption-naissance', component: AdoptionComponent},
      {path: 'reconnaissance-naissance', component: ReconnaissanceComponent},
      {path: 'jugement-naissance', component: JugementComponent},
      {path: 'premiere-copie-voir/:id', component: PremiereCopieVoirComponent},
      {path: 'adoption-copie-voir/:id', component: AdoptionVoirComponent},
 
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
