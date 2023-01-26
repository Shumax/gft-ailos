import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultationComponent } from './pages/consultation/consultation.component';
import { CooperatedComponent } from './pages/cooperated/cooperated.component';

const routes: Routes = [
  { path: '', component: ConsultationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
