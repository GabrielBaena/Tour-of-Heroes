import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {    //roda ao iniciar o código
    this.getHero();
  }

  getHero(): void {      //passao objeto do referente ao id do heroi
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {    //volta para a rota anterior
    this.location.back();
  }
  save(): void {     //salva novos dados do heroi e volta para a rota anterior
    if (this.hero) {  //verifica se o heroi existe
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}