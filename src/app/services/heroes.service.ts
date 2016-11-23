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


}
