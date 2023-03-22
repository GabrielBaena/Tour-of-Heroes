import { Component } from '@angular/core';

import {PokedexService} from '../pokedex.service'

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  newdata:any;
  constructor(private _pokedexsService:PokedexService) {}

  ngOnInit(){
    this._pokedexsService.getdata().subscribe(res=>{
      this.newdata=res
    })
  }
}
