import {Action} from '@ngrx/store';


import {Hero} from '../models/hero';
import {HeroActions} from '../actions/hero.actions'

export type HeroListState=Hero[];
const initialState:HeroListState=[];

export default function(state=initialState,action:Action):HeroListState{

    switch(action.type){
        case HeroActions.LOAD_HEROES:
        case HeroActions.LOAD_HEROES_SUCCESS:{
            return action.payload;
        }
        case HeroActions.SAVE_HERO:
        case HeroActions.SAVE_HERO_SUCCESS:{
            let index=state.findIndex(i=>i.id=action.payload.id)
            if(index>=0){
                return [
                    ...state.slice(0,index),
                    action.payload,
                    ...state.slice(index+1)
                ] 
            }
        }
        default:
        return state;
    }
}