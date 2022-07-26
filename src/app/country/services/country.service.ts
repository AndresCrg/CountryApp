import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountry(termino: string): Observable<Country[]>{
    const url = `${this.apiURL}/name/${termino}`
    return this.http.get<Country[]>(url);
  }

  searchCountryByCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiURL}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  searchCountryByAlphaCode(id: string): Observable<Country[]>{
    const url = `${this.apiURL}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }

  searchCountryByregion(region: string): Observable<Country[]>{
    const url = `${this.apiURL}/region/${region}`
    return this.http.get<Country[]>(url);
  }
}
