import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path: 'login',//localhost:4200/auth/login
    component: AuthenticationPageComponent
  },
  {
    path: '**', //Ruta que sea que no exista
    redirectTo: '/auth/login' //REdireccionar a
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
