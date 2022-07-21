import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CountryService } from "../../services/country.service";
import { switchMap, tap } from "rxjs/operators";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  country!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.searchCountryByAlphaCode( id )),
        tap( console.log )
      )
      .subscribe( resCountry => {
        console.log(resCountry)
        this.country = resCountry
      })

    // TODO: obtener datos sin desestructurar
    // this.activatedRoute.params
    //   .subscribe( params => {
    //     console.log(params.id)
    //   })

    // TODO: subscribe anidados
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id)
    //     this.countryService.searchCountryByAlphaCode(id)
    //       .subscribe( country => {
    //         console.log(country)
    //       })
    //   })
  }

}
