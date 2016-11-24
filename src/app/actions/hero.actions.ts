import{Action} from '@ngrx/store';
import {Hero} from '../models/hero';
import {Injectable} from '@angular/core';

@Injectable()
export class HeroActions{
    static LOAD_HEROES='[Hero] Load Heroes';
    loadHeroes():Action{
        return {type:HeroActions.LOAD_HEROES};
    }
    static LOAD_HEROES_SUCCESS = '[Hero] Load Heroes Success';
    loadHeroesSuccess(heroes:Hero[]): Action {
        return {
            type: HeroActions.LOAD_HEROES_SUCCESS,
            payload: heroes
        };
    }

     static GET_HERO = '[Hero] Get Hero';
    getHero(id:number): Action {
        return {
            type: HeroActions.GET_HERO,
            payload: id
        };
    }

    static GET_HERO_SUCCESS = '[Hero] Get Hero Success';
    getHeroSuccess(hero:Hero): Action {
        return {
            type: HeroActions.GET_HERO_SUCCESS,
            payload: hero
        };
    }

    static RESET_BLANK_HERO = '[Hero] Reset Blank Hero';
    resetBlankHero(): Action {
        return {
            type: HeroActions.RESET_BLANK_HERO
        };
    }

    static SAVE_HERO = '[Hero] Save Hero';
    saveHero(hero:Hero): Action {
        return {
            type: HeroActions.SAVE_HERO,
            payload: hero
        };
    }

    static SAVE_HERO_SUCCESS = '[Hero] Save Hero Success';
    saveHeroSuccess(hero:Hero): Action {
        return {
            type: HeroActions.SAVE_HERO_SUCCESS,
            payload: hero
        };
    }

    static ADD_HERO = '[Hero] Add Hero';
    addHero(hero:Hero): Action {
        return {
            type: HeroActions.ADD_HERO,
            payload: hero
        };
    }

    static ADD_HERO_SUCCESS = '[Hero] Add Hero Success';
    addHeroSuccess(hero:Hero): Action {
        return {
            type: HeroActions.ADD_HERO_SUCCESS,
            payload: hero
        };
    }

    static DELETE_HERO = '[Hero] Delete Hero';
    deleteHero(hero:Hero): Action {
        return {
            type: HeroActions.DELETE_HERO,
            payload: hero
        };
    }

    static DELETE_HERO_SUCCESS = '[Hero] Delete Hero Success';
    deleteHeroSuccess(hero:Hero): Action {
        return {
            type: HeroActions.DELETE_HERO_SUCCESS,
            payload: hero
        };
    }
    static SELECTED_ITEM='[Hero] Selected item';
    selectItem(hero:Hero):Action{
        return {type:HeroActions.SELECTED_ITEM,
                payload:hero}
    }
}