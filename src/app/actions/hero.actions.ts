import{Action} from '@ngrx/store';
import {Hero} from '../models/hero';
import {type} from '../utils/utils'


export const ActionTypes = {
  SEARCH:           type('[Hero] Search'),
  SEARCH_COMPLETE:  type('[Hero] Search Complete'),
  LOAD:             type('[Hero] Load'),
  SELECT:           type('[Hero] Select'),
};

export class SearchAction implements Action{
    type=ActionTypes.SEARCH;
    
    constructor(public payload:string){}
}
export class SearchCompleteAction implements Action{
    type=ActionTypes.SEARCH_COMPLETE;

    constructor(public payload:Hero[]){}
}
export class LoadAction implements Action{
    type=ActionTypes.LOAD;

    constructor(public payload:Hero ){

    }
}

export class SelectAction implements Action{
    type=ActionTypes.SELECT;

    constructor(public payload:Number){

    }
}

export type Actions=
  SearchAction|
  SearchCompleteAction|
  LoadAction|
  SelectAction;


