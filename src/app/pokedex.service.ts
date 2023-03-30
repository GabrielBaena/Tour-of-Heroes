import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs';

import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private _http:HttpClient,
  private messageService: MessageService) { }


  httpOptions = {   //adiciona o cabeçalho necessário para salvar as alterações no HTTP
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  gen1 = Array.from(
  { length: (151 - 1) / 1 + 1 },
  (value, index) => 1 + index * 1
  );
  gen_1_list:[][] = [];

  getdata(id:any) {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(
        tap(),
        catchError(this.handleError('getPokemon', []))
      )
  }

  getdatabyurl(url:string) {
    return  this._http.get<{}>(url)
      .pipe(
        tap(),
        catchError(this.handleError('getPokemonSpecies', []))
      )
  }


  getgen1() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .pipe(
        tap(_ => this.log(`fetched Kanto's pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  getgen2() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=151`)
      .pipe(
        tap(_ => this.log(`fetched Johto's pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  getgen3() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=135&offset=251`)
      .pipe(
        tap(_ => this.log(`fetched Hoenn's pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  getgen4() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=107&offset=386`)
      .pipe(
        tap(_ => this.log(`fetched Sinnoh's pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  getgen5() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=156&offset=493`)
      .pipe(
        tap(_ => this.log(`fetched Unova's pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  getgen6() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=72&offset=649`)
      .pipe(
        tap(_ => this.log(`fetched Kalos' pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  getgen7() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=88&offset=721`)
      .pipe(
        tap(_ => this.log(`fetched Alola's pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  getgen8() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=96&offset=809`)
      .pipe(
        tap(_ => this.log(`fetched Galar's pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  getgen9() {
    return  this._http.get<{}>(`https://pokeapi.co/api/v2/pokemon?limit=105&offset=905`)
      .pipe(
        tap(_ => this.log(`fetched Paldea's pokemon`)),
        catchError(this.handleError('getPokemon', []))
      )
  }
  

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
