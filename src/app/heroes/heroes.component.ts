import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

class Element {
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
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  displavedColumns: string[] = ['position','name','strength'];
  dataSource= ELEMENT_HEROES;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}