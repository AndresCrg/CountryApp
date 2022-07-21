import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestCountries: Country[] = [];

  constructor(private countryService:CountryService) { }

  search( termino: string ) {
    this.isError = false;
    this.termino = termino;
    this.countryService.searchCountry(this.termino)
      .subscribe(resCountries => {
        console.log(resCountries)
        this.countries = resCountries;
      }, err => {
        this.isError = true;
        this.countries = [];
      })
  }

  suggestions(termino: string) {
    this.isError = false;
    this.countryService.searchCountry( termino)
      .subscribe( resCountries => this.suggestCountries = resCountries.slice(0,3),
        (err) => this.suggestCountries = []
      )
  }
}
