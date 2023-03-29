
import { Component } from '@angular/core';

import { Observable, Subject } from 'rxjs';

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

  pokemonNameList: any[] = []

  pokemonSearch: string = ''

  types: any[] = ["normal",	"fire",	"water", "electric",	"grass", "ice", "fighting", "poison", "ground", "flying",
    "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
  

  filter_types: any[] = [{type: "normal", checked: false}, {type: "fire", checked: false},
    {type: "water", checked: false}, {type: "electric", checked: false}, {type: "grass", checked: false},
    {type: "ice", checked: false}, {type: "fighting", checked: false}, {type: "poison", checked: false},
    {type: "ground", checked: false}, {type: "flying", checked: false}, {type: "psychic", checked: false},
    {type: "bug", checked: false}, {type: "rock", checked: false}, {type: "ghost", checked: false},
    {type: "dragon", checked: false}, {type: "dark", checked: false}, {type: "steel", checked: false},
    {type: "fairy", checked: false}, ]
  
    // List to filter
  DisplayTypetList: any[] = [];

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



  ignoreOrderCompare = (a:any[], b:any[]) => {
    if (a.length !== b.length) return false;
    const elements = new Set([...a, ...b]);
    for (const x of elements) {
        const count1 = a.filter(e => e === x).length;
        const count2 = b.filter(e => e === x).length;
        if (count1 !== count2) return false;
    }
    return true;
  }

  checkElements(){
    this.filter_types.forEach(element => {
      if(element.checked == true) {
        if(this.DisplayTypetList.includes(element.type)){
        }
        else{
          this.DisplayTypetList.push(element.type)
          console.log(element.type + " added to Display Type")
          console.log(this.DisplayTypetList)
          this.filterPokemon()
        }
      } 
    else if(element.checked == false) {
      if(this.DisplayTypetList.includes(element.type)){
        let x = this.DisplayTypetList.indexOf(element.type)
        this.DisplayTypetList.splice(x, 1)
        console.log(element.type + " removed from Display Type")
        console.log(this.DisplayTypetList)
        this.filterPokemon()
      }
      else{
      }
    } 
  })
  }

  showAll(){
    this.pokemons.forEach(element => {
      element.pokemons.forEach((pokemon:any) =>{
        pokemon.show = true
      })
    });
  }

  filterPokemon(){
    if(this.DisplayTypetList.length == 0){
      console.log(this.pokemons)
      this.showAll()
    }
    else if(this.DisplayTypetList.length == 1){
      this.showAll()
      this.pokemons.forEach((element:any) => {
      element.pokemons.forEach((pokemon:any) => {
        if(pokemon.type.includes(this.DisplayTypetList[0])){
          console.log(pokemon.name)
        }
        else{
          pokemon.show = false
        }
      });
    });
    }
    else if (this.DisplayTypetList.length == 2){
      this.showAll()
      this.pokemons.forEach((element:any) => {
      element.pokemons.forEach((pokemon:any) => {
        if(this.ignoreOrderCompare(pokemon.type, this.DisplayTypetList)){
          console.log(pokemon.name)
        }
        else{
          pokemon.show = false
        }
      });
    });
    }
    else{
      this.pokemons.forEach((element:any) => {
        element.pokemons.forEach((pokemon:any) => {
          pokemon.show = false})
        }
      )
    }
  }  

  catchGen1(){
    this._pokedexsService.getgen1()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) => {
        this._pokedexsService.getdata(result.name)
          .subscribe((uniqueResponse: any) => {
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
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
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
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
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
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
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
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
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
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
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
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
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
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
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
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
            uniqueResponse.type = []
            uniqueResponse.types.forEach((element:any) => {
            uniqueResponse.type.push(element.type.name)
            });
            uniqueResponse.show = true
            this.pokemonNameList.push(uniqueResponse.name)
            this.pokemonNameList.sort()
            this.pokemonGen9.push(uniqueResponse);
            this.pokemonGen9.sort(function(a, b) {
              return a.id - b.id;
          })
        })
    })
  })
  }
}
