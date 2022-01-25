import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountriesDetailComponent } from './components/countries-detail/countries-detail.component';


@NgModule({
  declarations: [
    CountriesComponent,
    CountriesDetailComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    HttpClientModule
  ]
})
export class CountriesModule { }
