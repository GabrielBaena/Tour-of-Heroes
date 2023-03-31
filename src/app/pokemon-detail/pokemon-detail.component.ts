import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private _pokedexsService: PokedexService
  ) {}

  pokemon: any[] = [];

  gender_rate: any[] = [
    { female: null, male: '100%' },
    { female: '12.5%', male: '87.5%' },
    { female: '25%', male: '75%' },
    { female: '50%', male: '50%' },
    { female: '75%', male: '25%' },
    { female: '87.5%', male: '12.5%' },
    { female: '100%', male: null },
    { female: null, male: null },
  ];

  ngOnInit(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this._pokedexsService.getpokemon(name).subscribe((pokemon: any) => {
      pokemon.moves.sort(function (a: any, b: any) {
        return (
          a.version_group_details[0].level_learned_at -
          b.version_group_details[0].level_learned_at
        );
      });
      this.pokemon.push(pokemon);
      this._pokedexsService
        .getdatabyurl(this.pokemon[0].species.url)
        .subscribe((specie: any) => {
          this.pokemon.push(specie);
        });
    });
  }
}
