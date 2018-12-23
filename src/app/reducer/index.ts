import {NgModule} from '@angular/core';
import {createFeatureSelector, createSelector, StoreModule} from '@ngrx/store';

import * as fromCounter from './counter.rducer';
import * as fromQuote from './quote.reducer';
import {Quote} from '../domain';

export interface AppState {
  count: number;
  quote: Quote;
}

export interface State {
  app: AppState;
}

export const reducers = {
  count: fromCounter.reducer,
  quote: fromQuote.reducer
};

export const getAppState = createFeatureSelector<AppState>('app');
export const getCount = createSelector(getAppState, (state: AppState): number => state.count);
export const getQuote = createSelector(getAppState, (state: AppState): Quote => state.quote);

@NgModule({
  imports: [
    StoreModule.forFeature('app', reducers),
    // StoreDevtoolsModule.instrument(),
  ]
})
export class AppStoreModule { }




