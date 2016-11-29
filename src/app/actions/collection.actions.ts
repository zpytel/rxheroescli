import { Action } from '@ngrx/store';
import { Hero } from '../models/hero';
import {type} from '../utils/utils'


export const ActionTypes = {
  ADD_HERO:             type('[Collection] Add HERO'),
  ADD_HERO_SUCCESS:     type('[Collection] Add HERO Success'),
  ADD_HERO_FAIL:        type('[Collection] Add HERO Fail'),
  REMOVE_HERO:          type('[Collection] Remove HERO'),
  REMOVE_HERO_SUCCESS:  type('[Collection] Remove HERO Success'),
  REMOVE_HERO_FAIL:     type('[Collection] Remove HERO Fail'),
  LOAD:                 type('[Collection] Load'),
  LOAD_SUCCESS:         type('[Collection] Load Success'),
  LOAD_FAIL:            type('[Collection] Load Fail'),
};


/**
 * Add HERO to Collection Actions
 */
export class AddHeroAction implements Action {
  type = ActionTypes.ADD_HERO;

  constructor(public payload: Hero) {  }
}

export class AddHeroSuccessAction implements Action {
  type = ActionTypes.ADD_HERO_SUCCESS;

  constructor(public payload: Hero) { }
}

export class AddHeroFailAction implements Action {
  type = ActionTypes.ADD_HERO_FAIL;

  constructor(public payload: Hero) { }
}


/**
 * Remove HERO from Collection Actions
 */
export class RemoveHeroAction implements Action {
  type = ActionTypes.REMOVE_HERO;

  constructor(public payload: Hero) { }
}

export class RemoveHeroSuccessAction implements Action {
  type = ActionTypes.REMOVE_HERO_SUCCESS;

  constructor(public payload: Hero) { }
}

export class RemoveHeroFailAction implements Action {
  type = ActionTypes.REMOVE_HERO_FAIL;

  constructor(public payload: Hero) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Hero[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddHeroAction
  | AddHeroSuccessAction
  | AddHeroFailAction
  | RemoveHeroAction
  | RemoveHeroSuccessAction
  | RemoveHeroFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
