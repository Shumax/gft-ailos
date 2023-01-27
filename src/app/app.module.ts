import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './shared/material-modules/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { CooperatedComponent } from './pages/cooperated/cooperated.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SidenavComponent } from './shared/components-template/sidenav/sidenav.component';
import { TopbarComponent } from './shared/components-template/topbar/topbar.component';
import { StepsComponent } from './shared/components-pages/steps/steps.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
}

@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    CooperatedComponent,
    SidenavComponent,
    TopbarComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
