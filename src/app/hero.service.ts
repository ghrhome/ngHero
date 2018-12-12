import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import {HttpClient, HttpHeaders } from "@angular/common/http";

import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { MessageService } from "./message.service";



@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl='api/heroes';

  constructor(
    private http: HttpClient,
    private messageService:MessageService
  ) { }

  private log(message: string){
    this.messageService.add(`HeroService : ${message}`)
  }
  getHeroes(): Observable<Hero[]> {
    this.log('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)

  }

  getHero(id: number):Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(
      (hero)=> hero.id === id
    ));
  }

}
