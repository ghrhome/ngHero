import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import {HttpClient, HttpHeaders } from "@angular/common/http";


import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { MessageService } from "./message.service";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  private handleError(operation:string='operation', result?: T ){
    return (error: any): Observable<T> =>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    // this.log('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log(`fetched herores`)),
      catchError(this.handleError('getHeroes', []))
    )

  }

  getHero(id: number):Observable<Hero>{
    const url=`${this.heroesUrl}/${id}`;
    /*this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(
      (hero)=> hero.id === id
    ));*/
    return this.http.get<Hero>(url).pipe(
      tap((hero)=>{ this.log(`fetched hero id=${id}`)}),
      catchError(this.handleError<Hero>(`getHero id=${id})`))

    )
  }

  updateHero(hero: Hero): Observable<any>{
      return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
        tap(_=>{this.log(`update hero id=${hero.id}`)}),
        catchError(this.handleError<any>(`updateHero`))

      )
  }

}
