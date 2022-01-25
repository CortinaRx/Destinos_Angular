import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
public countriesURL: string = "https://destiny-api-s.vercel.app/api/countries"

  constructor(private httpClient: HttpClient) { }

  public getAllCountries(){
    return this.httpClient.get(this.countriesURL)
  }

  public getCountry(idCountries: any) {
    return this.httpClient.get(`${this.countriesURL}/${idCountries}`)
  }
}
