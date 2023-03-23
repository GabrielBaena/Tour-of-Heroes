import { Component, inject } from '@angular/core';

import {PokedexService} from '../pokedex.service'

import { pokemonData } from '../pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  newdata:any;
  pokemon: any;

  constructor(private _pokedexsService:PokedexService) {}
  
  ngOnInit(){
    this._pokedexsService.getdata(700).subscribe(res=>{
      this.newdata=res
    })

  }
}
