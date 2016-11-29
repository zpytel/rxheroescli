import {Action} from '@ngrx/store';


import {Hero} from '../models/hero';
import * as hero from '../actions/hero.actions'
import * as collection from '../actions/collection.actions';

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

export function reducer (state=initialState,action:hero.Actions|collection.Actions):State {

    switch(action.type){
        case hero.ActionTypes.SEARCH_COMPLETE:
        case collection.ActionTypes.LOAD_SUCCESS:{

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
            const updateentity=state.entities[action.payload.id]=action.payload;
            return {
                ids:state.ids,
                entities:Object.assign({},updateentity),
                selectedHeroId:state.selectedHeroId
            }

        
        }
        case HeroActions.DELETE_HERO:
        case HeroActions.DELETE_HERO_SUCCESS:{
            return state.entities.filter(hero=>{return hero.id !== action.payload.id})
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