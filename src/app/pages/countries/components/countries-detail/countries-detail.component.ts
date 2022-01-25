import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesInterface } from '../../models/Countries';
import { CountriesService} from "./../../services/countries.service"

@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.scss']
})
export class CountriesDetailComponent implements OnInit {
public countries!: CountriesInterface;
  constructor(private activedRoute: ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe((params) =>{
      const idCountries = params.get('idCountries');

      this.countriesService.getCountry(idCountries).subscribe((data:any)=>{
        const ApiResult: CountriesInterface = data;

        this.countries = ApiResult;
        console.log("Countris", this.countries);
        

      })
    })
  }

}
