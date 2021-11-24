import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


export interface Element {
  position: number;
  name: string;
  strength: number;
}

const ELEMENT_HEROES: Element[]=[
  {position: 1, name: 'Dr Nice', strength: 3},
  {position: 2, name: 'Narco', strength: 2},
  {position: 3, name: 'Bombasto', strength: 3},
  {position: 4, name: 'Celeritas', strength: 4},
  {position: 5, name: 'Magneta', strength: 4},
  {position: 6, name: 'RubberMan', strength: 5},
  {position: 7, name: 'Dynama', strength: 1},
  {position: 8, name: 'Dr IQ', strength: 3},
  {position: 9, name: 'Magma', strength: 4},
  {position: 10, name: 'Tornado', strength: 5},
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