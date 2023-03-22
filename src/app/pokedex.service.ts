import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private _http:HttpClient,
  private messageService: MessageService) { }

  private pokeAPI= "https://pokeapi.co/api/v2/pokemon/1/"

  httpOptions = {   //adiciona o cabeçalho necessário para salvar as alterações no HTTP
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getdata() {
    return this._http.get(this.pokeAPI)
      .pipe(
        tap(_ => this.log('bulbasaur fetched')),
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
