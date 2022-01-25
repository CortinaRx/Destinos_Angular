import { CountriesService } from './services/countries.service';
import { Component, OnInit } from '@angular/core';
import { CountriesInterface } from './models/Countries';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
public countries: CountriesInterface[] = [];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data: any) =>{
      const apiResults: CountriesInterface[] = data;

      const formattedCountries = apiResults.map(({_id, id, name, temperature, capitals, population, image, beach}) =>({
       _id, id, name, temperature, capitals, population, image, beach
      }) );
      this.countries = formattedCountries
    })
  }

}