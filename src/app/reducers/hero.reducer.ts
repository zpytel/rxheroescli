import {Action} from '@ngrx/store';


import {Hero} from '../models/hero';
import {HeroActions} from '../actions/hero.actions'

type HeroListState=Hero[];
const initialState:HeroListState=[];

export const  HeroReducer=(state=initialState,action:Action):HeroListState =>{

    switch(action.type){
        case HeroActions.LOAD_HEROES:
        case HeroActions.LOAD_HEROES_SUCCESS:{
            return action.payload;
        }
        case HeroActions.SAVE_HERO:
        case HeroActions.SAVE_HERO_SUCCESS:{
            return [...state,action.payload];
        }
        case HeroActions.DELETE_HERO:
        case HeroActions.DELETE_HERO_SUCCESS:{
            return state.filter(hero=>{return hero.id !== action.payload.id})
        }
        case HeroActions.SELECTED_ITEM:{
            return state.map(item=>{
                return item.id===action.payload.id?Object.assign({},item,{selected:!item.selected}):Object.assign({},item,{selected:false});
            })
        }
        default:
        return state;
    }
}