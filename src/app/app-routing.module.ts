import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActiveCooperatedGuard } from './guard/can-active-cooperated.guard';

import { ConsultationComponent } from './pages/consultation/consultation.component';
import { CooperatedComponent } from './pages/cooperated/cooperated.component';

const routes: Routes = [
  { path: '', component: ConsultationComponent },
  { path: 'cooperated', component: CooperatedComponent, canActivate: [CanActiveCooperatedGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
