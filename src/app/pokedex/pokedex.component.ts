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
  pokemonGen2: any[] = [];
  pokemonGen3: any[] = [];
  pokemonGen4: any[] = [];
  pokemonGen5: any[] = [];
  pokemonGen6: any[] = [];
  pokemonGen7: any[] = [];
  pokemonGen8: any[] = [];
  pokemonGen9: any[] = [];

  types: any[] =[
    "normal",	"fire",	"water","electric",	"grass","ice",
     "fighting", "poison", "ground", "flying", "psychic",
     "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy",  ];

  checked_types: any[] = []

  ngOnInit(): void{
this.catchGen1()
this.catchGen2()
this.catchGen3()
this.catchGen4()
this.catchGen5()
this.catchGen6()
this.catchGen7()
this.catchGen8()
this.catchGen9()

  } 

  catchGen1(){
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

  catchGen2(){
    this._pokedexsService.getgen2()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonGen2.push(uniqueResponse);
            this.pokemonGen2.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }

  catchGen3(){
    this._pokedexsService.getgen3()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonGen3.push(uniqueResponse);
            this.pokemonGen3.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }

  catchGen4(){
    this._pokedexsService.getgen4()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonGen4.push(uniqueResponse);
            this.pokemonGen4.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }

  catchGen5(){
    this._pokedexsService.getgen5()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonGen5.push(uniqueResponse);
            this.pokemonGen5.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }

  catchGen6(){
    this._pokedexsService.getgen6()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonGen6.push(uniqueResponse);
            this.pokemonGen6.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }

  catchGen7(){
    this._pokedexsService.getgen7()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonGen7.push(uniqueResponse);
            this.pokemonGen7.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }

  catchGen8(){
    this._pokedexsService.getgen8()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonGen8.push(uniqueResponse);
            this.pokemonGen8.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }

  catchGen9(){
    this._pokedexsService.getgen9()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            this.pokemonGen9.push(uniqueResponse);
            this.pokemonGen9.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }
}