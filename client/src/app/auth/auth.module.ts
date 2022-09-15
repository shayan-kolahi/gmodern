import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    AuthRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    AngularToastifyModule,
  ],
  providers: [ToastService],
})
export class AuthModule { }
