import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthentificationComponent } from '../authentification/authentification.component';
import { InitializationComponent }   from '../initialization/initialization.component';
import { CreateResultComponent }     from '../create-result/create-result.component';
import { CompanyComponent }          from '../company/company.component';
import { ComptabilityComponent }     from '../comptability/comptability.component';
import { SituationComponent }        from '../situation/situation.component';
import { FluxComponent }             from '../flux/flux.component';
import { StudiesComponent }          from '../studies/studies.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentification', pathMatch: 'full' },
  // { path: '**', redirectTo: '/authentification', pathMatch: 'full' },
  { path: 'authentification',   component: AuthentificationComponent},
  { path: 'newproject',         component: InitializationComponent },
  { path: 'result',             component: CreateResultComponent },
  { path: 'choice/:id',         component: CompanyComponent },
  { path: 'situation/:id',      component: SituationComponent },
  { path: 'compatability/:id',  component: ComptabilityComponent },
  { path: 'flux/:id',           component: FluxComponent },
  { path: 'studies/:id',        component: StudiesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
