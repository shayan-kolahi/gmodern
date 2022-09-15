import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "auth" , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path : "panel" , loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
