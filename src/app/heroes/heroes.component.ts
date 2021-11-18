import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

export interface Element {
  position: number;
  name: string;
  strength: number;
}

const ELEMENT_HEROES: Element[]=[
  {position: 1, name: 'dc', strength: 4},
  {position: 2, name: 'dc', strength: 4},
  {position: 3, name: 'dc', strength: 4},
];

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  /* heroes: any ='as' */
})

export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['position','name','strength'];
  dataSource= ELEMENT_HEROES;

  constructor(private heroService: HeroService) { }
  heroes: any ="";
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {

    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}