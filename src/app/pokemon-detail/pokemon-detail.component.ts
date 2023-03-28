import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import {PokedexService} from '../pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  constructor(
    private route:ActivatedRoute,
     private router:Router,

    private _pokedexsService:PokedexService) {}
  
  next: number = 2
  image_url = ''
  moves:any[] = []
  pokemon: any[] = []
  ngOnInit(): void{
    const name = String(this.route.snapshot.paramMap.get('name'));
    this._pokedexsService.getdata(name)
      .subscribe((pokemon:any) => this.pokemon.push(pokemon)
      );
  }


}