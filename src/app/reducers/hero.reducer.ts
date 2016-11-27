import {Action} from '@ngrx/store';


import {Hero} from '../models/hero';
import {HeroActions} from '../actions/hero.actions'

export interface State{
ids:number[],
entities:{[id:number]:Hero},
selectedHeroId: number | null
}
const initialState:State={
    ids:[],
    entities:{},
    selectedHeroId:null
}

export const  HeroReducer=(state=initialState,action:Action):State =>{

    switch(action.type){
        case HeroActions.LOAD_HEROES:
        case HeroActions.LOAD_HEROES_SUCCESS:{

            const heroes=action.payload;
            const heroesIds=heroes.map(hero=>hero.id);
            const heroesEntities=heroes.reduce((entities:{[id:number]:Hero},hero:Hero)=>{
                return Object.assign(entities,{
                    [hero.id]:hero
                });
            },{});
            return {
                ids:[...state.ids,...heroesIds],
                entities:Object.assign({},state.entities,heroesEntities),
                selectedHeroId:state.selectedHeroId
            };
        }
        case HeroActions.SAVE_HERO:
        case HeroActions.SAVE_HERO_SUCCESS:{
            const hero=action.payload;
            const heroEntity={[hero.id]:hero}
            return {
                ids:[...state.ids,hero.id],
                entities:Object.assign({},state.entities,heroEntity),
                selectedHeroId:state.selectedHeroId
            }
        }
        case HeroActions.UPDATE_HERO:
        case HeroActions.UPDATE_HERO_SUCCESS:{
            
            return {
                ids:state.ids,
                entities:state.entities[action.payload.id]
            }

        
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