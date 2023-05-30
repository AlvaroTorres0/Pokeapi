import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  public url = "https://pokeapi.co/api/v2/";

  constructor(private _httpClient : HttpClient) { }

  getPokemones(index : number){
    const urlRecurso = `${this.url}/pokemon/${index+1}`;
    return this._httpClient.get(urlRecurso);
  }
}
