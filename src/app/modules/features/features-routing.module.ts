import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScopedAComponent } from './components/scoped-a/scoped-a.component';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path:'',component:FeaturesComponent, children: [
      {path: '', redirectTo: 'scoped',pathMatch: 'full' },
      {path: 'scoped', component: ScopedAComponent } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
