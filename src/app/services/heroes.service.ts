import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/'

import {Hero} from '../models/hero';

@Injectable()
export class HeroesService {
  apiserver:string="http://localhost:3000";
  constructor(private http:Http) { }
  
  getHeroes():Observable<Hero[]>{
  //  return Observable.interval(1000).switchMap(
 //     ()=>this.http.get(`${this.apiserver}/api/heroes`)
  //    ).map(resp=>resp.json()).distinctUntilChanged();

      return this.http.get(`${this.apiserver}/api/heroes`)
      .map((resp:Response)=>resp.json());
    
  }
  getHero(id:number):Observable<Hero>{
    return this.http.get(`${this.apiserver}/api/heroes/${id}`)
    .map((res:Response)=>res.json());
  }

  saveHero(hero:Hero):any{
    if(hero.id===0){
     return this.http.post(`${this.apiserver}/api/heroes`,hero)
      .map(res=>res.json());
    }else{
      return this.http.put(`${this.apiserver}/api/heroes/${hero.id}`,Object.assign({},{id:hero.id,name:hero.name}))
      .map(res=>res.json());
    }
  }

  delteHero(hero){
    return this.http.delete(`${this.apiserver}/api/heroes/${hero.id}`)
    .map(res=>res.json());
  }


}
