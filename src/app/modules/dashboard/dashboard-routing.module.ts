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
import { JugementVoirComponent } from './components/naissance/jugement/jugement-voir/jugement-voir.component';
import { ReconnaissanceVoirComponent } from './components/naissance/reconnaissance/reconnaissance-voir/reconnaissance-voir.component';
import { BulletinComponent } from './components/naissance/bulletin/bulletin.component';
import { BulletinListComponent } from './components/naissance/bulletin/bulletin-list/bulletin-list.component';
import { MariageComponent } from './components/mariage/mariage/mariage.component';
import { MariageAddComponent } from './components/mariage/mariage/mariage-add/mariage-add.component';
import { DivorceComponent } from './components/mariage/divorce/divorce.component';
import { CelibataireComponent } from './components/mariage/celibataire/celibataire.component';
import { UtilisateurListComponent } from './components/utilisateur/utilisateur-list/utilisateur-list.component';
import { UtilisateurAddComponent } from './components/utilisateur/utilisateur-add/utilisateur-add.component';
import { AfterLoginService } from 'src/app/core/services/after-login.service';
import { MariageVoirComponent } from './components/mariage/mariage/mariage-voir/mariage-voir.component';
import { DecesListComponent } from './components/deces/deces-list/deces-list.component';
import { DecesAddComponent } from './components/deces/deces-add/deces-add.component';
import { DecesShowComponent } from './components/deces/deces-show/deces-show.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, canActivate:[AfterLoginService],
    children: [
      { path: '', redirectTo: 'naissance', pathMatch: 'full' },
      { path: 'premiere-copie', component: PremiereCopieComponent },
      { path: 'naissance', component: NaissanceHomeComponent },
      { path: 'bulletin-naissance-add', component: BulletinComponent },
      { path: 'bulletin-naissance-list', component: BulletinListComponent},
      { path: 'add-naissance', component: NaissanceAddComponent },
      { path: 'add-adoption', component: AdoptionAddComponent },
      { path: 'add-jugement', component: JugementAddComponent },
      { path: 'add-reconnaissance', component: ReconnaissanceAddComponent },
      { path: 'adoption-naissance', component: AdoptionComponent },
      { path: 'reconnaissance-naissance', component: ReconnaissanceComponent },
      { path: 'jugement-naissance', component: JugementComponent },
      {
        path: 'premiere-copie-voir/:id',
        component: PremiereCopieVoirComponent,
      },
      { path: 'adoption-copie-voir/:id', component: AdoptionVoirComponent },
      { path: 'jugement-copie-voir/:id', component: JugementVoirComponent },
      {
        path: 'reconnaissance-copie-voir/:id',
        component: ReconnaissanceVoirComponent,
      },
      {path: 'mariage-list', component: MariageComponent},
      {path: 'mariage-add', component: MariageAddComponent},
      {path: 'mariage-show/:id', component: MariageVoirComponent},
      {path: 'divorce-list', component: DivorceComponent},
      {path: 'celibat-list', component: CelibataireComponent},
      {path: 'deces-list', component: DecesListComponent},
      {path: 'add-deces', component: DecesAddComponent},
      {path: 'show-deces/:id', component: DecesShowComponent},
      {path: 'utilisateur-list', component: UtilisateurListComponent},
      {path: 'utilisateur-add', component: UtilisateurAddComponent},

      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
