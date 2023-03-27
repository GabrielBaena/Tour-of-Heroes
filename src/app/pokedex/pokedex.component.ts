import { NumberFormatStyle } from '@angular/common';
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
  pokemons: any[] = [{pokemons: this.pokemonGen1, gen: 1}, {pokemons: this.pokemonGen2, gen: 2},{pokemons: this.pokemonGen3, gen: 3},
    {pokemons: this.pokemonGen4, gen: 4},{pokemons: this.pokemonGen5, gen: 5},{pokemons: this.pokemonGen6, gen: 6},
    {pokemons: this.pokemonGen7, gen: 7},{pokemons: this.pokemonGen8, gen: 8},{pokemons: this.pokemonGen9, gen: 9},]

  types: any[] = ["normal",	"fire",	"water", "electric",	"grass", "ice", "fighting", "poison", "ground", "flying",
    "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
  

  filter_types: any[] = [{type: "normal", checked: false}, {type: "fire", checked: false},
    {type: "water", checked: false}, {type: "electric", checked: false}, {type: "grass", checked: false},
    {type: "ice", checked: false}, {type: "fighting", checked: false}, {type: "poison", checked: false},
    {type: "ground", checked: false}, {type: "flying", checked: false}, {type: "psychic", checked: false},
    {type: "bug", checked: false}, {type: "rock", checked: false}, {type: "ghost", checked: false},
    {type: "dragon", checked: false}, {type: "dark", checked: false}, {type: "steel", checked: false},
    {type: "fairy", checked: false}, ]
  
    type: {} = {normal: false, fire: false}
    typeData: any = this.pokemons;
    // List to filter
    DisplayTypetList: any = this.pokemons;

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


  selectedItems: number =0;
  counter = 0
checkedState(event:any, checkBox:any) {
            if(event.target.checked === true){
              if(this.counter < 5){
              this.counter++
            }else{
               event.target.checked = false;
            }
            }else if(this.counter>0){
              this.counter--;
            }
        }
  OnChange(event: any) {
    //Emptying current product list
    this.DisplayTypetList = [];

    //We are assigning the selected brand products to the product list and if no brand is selected nothing happens
    for (var i = 0; i < this.selectedBrand.length; i++) {
      var lst = this.typeData.MobileList.filter((x:any) => x.BrandName == this.selectedBrand[i].BrandName);
      for (var j = 0; j < lst.length; j++) {
        this.DisplayTypetList.push(lst[j]);
      }
    }

    //We are assigning selected OS product to the product list
    //If any Brand was selected then we are filtering the list which was filtered in brand filtering, else we are filtering the original list
    if (this.selectedBrand.length > 0) {
      if (this.selectedOS.length > 0) {
        var tempProductlst = this.DisplayTypetList;
        this.DisplayTypetList = [];
        for (var i = 0; i < this.selectedOS.length; i++) {
          //Filtering the same list which was filtered in brand list
          var lst = tempProductlst.filter((x:any) => x.OSName == this.selectedOS[i].OSName);
          for (var j = 0; j < lst.length; j++) {
            this.DisplayTypetList.push(lst[j]);
          }
        }
      }
    }
    else {
      for (var i = 0; i < this.selectedOS.length; i++) {
        //filtering the original product list
        var lst = this.typeData.MobileList.filter((x:any) => x.OSName == this.selectedOS[i].OSName);
        for (var j = 0; j < lst.length; j++) {
          this.DisplayTypetList.push(lst[j]);
        }
      }
    }

    //We are assigning selected Network products to the product list
    //If any brand or OS is selected then we are filtering the same list filtered there, else we are filtering from original product list
    if (this.selectedBrand.length > 0 || this.selectedOS.length > 0) {
      if (this.selectedNetwork.length > 0) {
        var tempProductlst = this.DisplayTypetList;
        this.DisplayTypetList = [];
        for (var i = 0; i < this.selectedNetwork.length; i++) {
          //filtering from the same list filtered in Brand and OS
          var lst = tempProductlst.filter((x:any) => x.NetworkType == this.selectedNetwork[i].NetworkType);
          for (var j = 0; j < lst.length; j++) {
            this.DisplayTypetList.push(lst[j]);
          }
        }
      }
    }
    else {
      for (var i = 0; i < this.selectedNetwork.length; i++) {
        //filtering from original product list
        var lst = this.typeData.MobileList.filter((x:any) => x.NetworkType == this.selectedNetwork[i].NetworkType);
        for (var j = 0; j < lst.length; j++) {
          this.DisplayTypetList.push(lst[j]);
        }
      }
    }

    //If no checkbox is selected assign original product list to display product list
    if (this.selectedBrand.length == 0 && this.selectedOS.length == 0 && this.selectedNetwork.length == 0) {
      this.DisplayTypetList = this.typeData.MobileList;
    }
  }

  get selectedBrand() {
    //Get all the selected brands
    return this.typeData.Brands.filter((opt:any) => opt.Checked)
  }

  get selectedOS() {
    //Get all the selected Operating systems
    return this.typeData.OperatingSystems.filter((opt:any)  => opt.Checked)
  }

  get selectedNetwork() {
    //Get all the selected networks
    return this.typeData.NetworkTypes.filter((opt:any)  => opt.Checked)
  }
}
