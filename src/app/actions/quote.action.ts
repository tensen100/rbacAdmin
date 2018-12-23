import {Action} from '@ngrx/store';
import {type} from '../utils/type.util';
import {Quote} from '../domain';

export const QuoteActionTypes = {
  LOAD: type('[quote] load'),
  LOAD_SUCCESS: type('[quote] load success'),
  LOAD_FAIL: type('[quote] load fail')
};

export class LoadAction implements Action {
  readonly type = QuoteActionTypes.LOAD;

  constructor(public payload: null) {}
}

export class LoadSuccessAction implements Action {
  readonly type = QuoteActionTypes.LOAD_SUCCESS;

  constructor(public payload: Quote) {}
}

export class LoadFailAction implements Action {
  readonly type = QuoteActionTypes.LOAD_FAIL;

  constructor(public payload: string) {}
}

export type QuoteActions = LoadAction | LoadSuccessAction | LoadFailAction;

