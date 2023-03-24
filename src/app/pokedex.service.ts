import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs';

import { Observable, of, map } from 'rxjs';

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

  gen1 = Array.from(
  { length: (151 - 1) / 1 + 1 },
  (value, index) => 1 + index * 1
  );
  gen_1_list:[][] = [];

  getdata(id:any) {
    return  this._http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(
        tap(),
        catchError(this.handleError('getPokemon', []))
      )
  }



  getgen1() {
    return  this._http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .pipe(
        tap(_ => this.log(`fetched Kalos' pokemon`)),
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
