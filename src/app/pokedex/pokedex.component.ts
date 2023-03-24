import { Component, inject, OnInit} from '@angular/core';

import {PokedexService} from '../pokedex.service'



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  constructor(private _pokedexsService:PokedexService) {}

  pokemonGen1: any[] = [];
  types: any[] =[
    "normal",	"fire",	"water","electric",	"grass","ice",
     "fighting", "poison", "ground", "flying", "psychic",
     "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy",  ]

  ngOnInit(): void{
    this._pokedexsService.getgen1()
      .subscribe((response:any)=>{
        response.results.forEach((result:any) => {
          this._pokedexsService.getdata(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemonGen1.push(uniqueResponse);
              this.pokemonGen1.sort(function(a, b) {
                return a.id - b.id;
            })
          })
      })
    })

  } 
}
