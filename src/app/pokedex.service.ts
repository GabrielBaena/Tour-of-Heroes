import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs';

import { Observable, of } from 'rxjs';

import { Pokemon, pokemon, pokemonData} from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private _http:HttpClient,
  private messageService: MessageService) { }


  httpOptions = {   //adiciona o cabeçalho necessário para salvar as alterações no HTTP
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getdata(id:number) {
    return  this._http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(
        tap(_ => this.log('bulbasaur fetched')),
        catchError(this.handleError('getPokemon', []))
      )
  }

  

 /* getPokemonList(data: []){     //pega a lista de todos os pokemon e passa para getPokemon
    let pokemonList:{}[] = [];

    data.forEach((element: pokemon) => {
      pokemonList.push(this.getPokemon(element))
    }); 
    return pokemonList;
 }

  getPokemon(pokemon: pokemon) {    //pega a url de cada pokemon e devolve
    return this._http.get(`${pokemon.url}`)
    .pipe(
      tap(_ => this.log(`pokemon #${pokemon.name} fetched`)),
      catchError(this.handleError('getPokemon', []))
    )
  }
  */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
