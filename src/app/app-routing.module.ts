import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: `about`,
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: `countries`,
    loadChildren: () =>
      import('./pages/countries/countries.module').then((m) => m.CountriesModule),
  },
  {
    path: `scenery`,
    loadChildren: () =>
      import('./pages/scenery/scenery.module').then((m) => m.SceneryModule),
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
