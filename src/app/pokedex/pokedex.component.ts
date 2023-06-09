import { Component } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { PokedexService } from '../pokedex.service';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent {
  constructor(private _pokedexsService: PokedexService) {}

  pokemons: { pokemons: any[]; gen: number }[] = [
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
  ];

  pokemonDisplay: { pokemons: any[]; gen: number }[] = [
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
    { pokemons: [], gen: 0 },
  ];

  pokemonNameList: any[] = [];

  pokemonSearch: string = '';

  types: any[] = [
    { type: 'normal', checked: false },
    { type: 'fire', checked: false },
    { type: 'water', checked: false },
    { type: 'grass', checked: false },
    { type: 'electric', checked: false },
    { type: 'ice', checked: false },
    { type: 'fighting', checked: false },
    { type: 'poison', checked: false },
    { type: 'ground', checked: false },
    { type: 'flying', checked: false },
    { type: 'psychic', checked: false },
    { type: 'bug', checked: false },
    { type: 'rock', checked: false },
    { type: 'ghost', checked: false },
    { type: 'dragon', checked: false },
    { type: 'dark', checked: false },
    { type: 'steel', checked: false },
    { type: 'fairy', checked: false },
  ];

  DisplayTypetList: any[] = [];

  ngOnInit(): void {
    this.catchGens();
  }

  clonePokemonList() {
    this.pokemons.forEach((val) => {
      this.pokemonDisplay.push(Object.assign({}, val));
    });
  }

  clearPokemonList() {
    this.pokemonDisplay.forEach((element) => {
      element.pokemons = [];
    });
  }

  ignoreOrderCompare = (a: any[], b: any[]) => {
    if (a.length !== b.length) return false;
    const elements = new Set([...a, ...b]);
    for (const x of elements) {
      const count1 = a.filter((e) => e === x).length;
      const count2 = b.filter((e) => e === x).length;
      if (count1 !== count2) return false;
    }
    return true;
  };

  checkElements() {
    this.types.forEach((element) => {
      if (element.checked == true) {
        if (!this.DisplayTypetList.includes(element.type)) {
          this.DisplayTypetList.push(element.type);
          this.filterPokemon();
        }
      } else if (element.checked == false) {
        if (this.DisplayTypetList.includes(element.type)) {
          let x = this.DisplayTypetList.indexOf(element.type);
          this.DisplayTypetList.splice(x, 1);
          this.filterPokemon();
        }
      }
    });
  }

  filterPokemon() {
    this.clearPokemonList();
    if (this.DisplayTypetList.length == 0) {
      this.pokemonDisplay = [];
      this.clonePokemonList();
    } else if (this.DisplayTypetList.length == 1) {
      this.pokemons.forEach((element: any) => {
        element.pokemons.forEach((pokemon: any) => {
          if (pokemon.type.includes(this.DisplayTypetList[0])) {
            this.pokemonDisplay[element.gen - 1].pokemons.push(pokemon);
          } else {
          }
        });
      });
    } else if (this.DisplayTypetList.length == 2) {
      this.pokemons.forEach((element: any) => {
        element.pokemons.forEach((pokemon: any) => {
          if (this.ignoreOrderCompare(pokemon.type, this.DisplayTypetList)) {
            this.pokemonDisplay[element.gen - 1].pokemons.push(pokemon);
          } else {
          }
        });
      });
    } else {
      this.pokemons.forEach((element: any) => {
        element.pokemons.forEach((pokemon: any) => {});
      });
    }
  }

  catchGens() {
    this._pokedexsService.getgeneratios().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this._pokedexsService
          .getdatabyurl(result.url)
          .subscribe((uniqueResponse: any) => {
            this.pokemons[uniqueResponse.id - 1].gen = uniqueResponse.id;
            this.pokemonDisplay[uniqueResponse.id - 1].gen = uniqueResponse.id;
            uniqueResponse.pokemon_species.forEach((element: any) => {
              this._pokedexsService
                .getdatabyurl(element.url)
                .subscribe((species: any) => {
                  this._pokedexsService
                    .getpokemon(species.id)
                    .subscribe((pokemon: any) => {
                      pokemon.type = [];
                      pokemon.types.forEach((element: any) => {
                        pokemon.type.push(element.type.name);
                      });
                      this.pokemons[uniqueResponse.id - 1].pokemons.push(
                        pokemon
                      );
                      this.pokemons[uniqueResponse.id - 1].pokemons.sort(
                        function (a: any, b: any) {
                          return a.id - b.id;
                        }
                      );
                      this.pokemonDisplay[uniqueResponse.id - 1].pokemons.push(
                        pokemon
                      );
                      this.pokemonDisplay[uniqueResponse.id - 1].pokemons.sort(
                        function (a: any, b: any) {
                          return a.id - b.id;
                        }
                      );
                      this.pokemonNameList.push(pokemon.name);
                    });
                });
            });
          });
      });
    });
  }
}
