import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empty } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlv2: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ){}

  buscarPais(termino:string){
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Empty[]>(url);
  }

  buscarCapital(termino:string){
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Empty[]>(url);
  }

  informacionPais(id:string){
    const url = `${this.apiUrlv2}/alpha/${id}`;
    return this.http.get<Empty>(url);
  }

  buscarRegion(termino:string){
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Empty[]>(url);
  }

}
