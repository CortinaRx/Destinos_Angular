import { CountriesComponent } from './countries.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDetailComponent } from './components/countries-detail/countries-detail.component';


const routes: Routes = [
  {path: "", component: CountriesComponent},
  {path: ":idCountries", component: CountriesDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
