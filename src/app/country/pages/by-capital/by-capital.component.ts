import {Component} from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService ) { }

  search(termino: string){
    this.isError = false;
    this.termino = termino;
    this.countryService.searchCountryByCapital(this.termino)
      .subscribe( resCountries => {
        this.countries = resCountries;
      }, error => {
        this.isError = true;
        this.countries = [];
      })
  }
}
