import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ConversionComponent } from './conversion/conversion.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'convert', component: ConversionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
