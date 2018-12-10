import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
//import { HEROES } from "../mock-heros"

import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {

  heroes : Hero[];

  constructor(private heroService: HeroService) {

  }

  getHeroes(): void{
     this.heroService.getHeroes()
       .subscribe(
         heroes=>{
           this.heroes=heroes;
         }
       );
  }

  ngOnInit() {
    this.getHeroes();
  }

}
