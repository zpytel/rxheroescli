import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import{HeroActions} from '../actions/hero.actions';
import{HeroesService} from '../services/heroes.service';
import{Hero}from '../models/hero'

@Injectable()
export class HerroEffects{
 constructor(private service:HeroesService,
            private action:Actions,
            private heroactions:HeroActions){}

  @Effect() loadHeroes=this.action.ofType(HeroActions.LOAD_HEROES)
  .switchMap(()=>this.service.getHeroes())
  .map(heroes=>this.heroactions.loadHeroesSuccess(heroes))

  @Effect() getHero=this.action.ofType(HeroActions.GET_HERO)
  .map(action=>action.payload)
  .switchMap(id=>this.service.getHero(id))
  .map(hero=>this.heroactions.getHeroSuccess(hero));

    @Effect() saveHero=this.action.ofType(HeroActions.SAVE_HERO)
    .map(action=>action.payload)
    .switchMap((hero:Hero)=>this.service.saveHero(hero))
    .map((hero:Hero)=>this.heroactions.saveHeroSuccess(hero))

    @Effect() addHero=this.action.ofType(HeroActions.ADD_HERO)
    .map(action=>action.payload)
    .switchMap((hero:Hero)=>this.service.saveHero(hero))
    .map((hero:Hero)=>this.heroactions.saveHeroSuccess(hero))

    @Effect() deleteHero=this.action.ofType(HeroActions.DELETE_HERO)
    .map(action=>action.payload)
    .switchMap((hero:Hero)=>this.service.delteHero(hero))
    .map((hero:Hero)=>this.heroactions.deleteHeroSuccess(hero))

    @Effect() updateHero=this.action.ofType(HeroActions.UPDATE_HERO)
    .map(action=>action.payload)
    .switchMap((hero:Hero)=>this.service.saveHero(hero))
    .map((hero:Hero)=>this.heroactions.updateHeroSuccess(hero))
    .map((val)=>this.heroactions.selectItem(val.payload))
    


}
