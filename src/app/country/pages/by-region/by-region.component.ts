import { Component } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button{
        margin-right: 8px;
      }
    `
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = []

  constructor(private countryService:CountryService) { }

  activateRegion(region:string){

    if(region == this.activeRegion) { return; }

    this.activeRegion = region;
    this.countries = [];
    this.countryService.searchCountryByregion(region)
      .subscribe( resCountries =>{
        this.countries = resCountries
      })
  }

  getClassCSS(region: string) {
    return (this.activeRegion === region) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
}
