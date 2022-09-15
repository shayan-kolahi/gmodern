import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

import { PanelRoutingModule } from './panel-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { SidbarComponent } from './component/sidbar/sidbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidbarComponent,
    FooterComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatToolbarModule
  ]
})
export class PanelModule { }
