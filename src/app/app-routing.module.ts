import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';

const routes: Routes = [
  {
    path: 'auth', //Ruta public
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '', //Privada, ruta protegida
    component: HomePagesComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
