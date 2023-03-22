import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {    //roda ao carregar o código
    this.getHeroes();
  }


  getHeroes(): void {    //coleta os dados dos herois
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {   //adiciona heroi recebendo uma string com o nmoe do heroi
    name = name.trim();   //remove os espaços em branco da string
    if (!name) { return; }   //caso não tenha sido escrito algum nome
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);    //adiciona o heroi no banco de dados
      });
  }

  delete(hero: Hero): void {    //deleta heroi
    this.heroes = this.heroes.filter(h => h !== hero);    //???
    this.heroService.deleteHero(hero.id).subscribe();
  }
}