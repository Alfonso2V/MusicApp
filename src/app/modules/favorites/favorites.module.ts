import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
// import { PagesComponent } from './pages/pages.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';


@NgModule({
  declarations: [
    // PagesComponent,
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }