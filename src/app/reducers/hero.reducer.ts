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

export function reducer (state=initialState,action: hero.Actions|collection.Actions):State {
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
        case hero.ActionTypes.LOAD:{
            const hero=action.payload;
            if (state.ids.indexOf(hero.id)){
              return state;
            }
            return {
                ids:[...state.ids,hero.id],
                entities:Object.assign({},state.entities,{[hero.id]:hero}),
                selectedHeroId:state.selectedHeroId
            }
        }
        case hero.ActionTypes.SELECT:{
            return{
                ids:state.ids,
                entities:state.entities,
                selectedHeroId:state.selectedHeroId
            }
        }
       
        default:
        return state;
    }
}