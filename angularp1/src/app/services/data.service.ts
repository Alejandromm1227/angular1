import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  API_URL: string = "https://pokeapi.co/api/v2/pokemon/";

  httpclient = inject(HttpClient);
  obtenerDatos(){
    return this.httpclient.get(this.API_URL);
  }
}
