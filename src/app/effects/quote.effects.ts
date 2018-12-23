import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {QuoteService} from '../service/quote.service';
import {LoadFailAction, LoadSuccessAction, QuoteActionTypes} from '../actions/quote.action';

@Injectable()
export class QuoteEffects {
  @Effect()
  quote$: Observable<Action> = this.actions$
    .pipe(
      ofType(QuoteActionTypes.LOAD),
      mergeMap(_ => this.service$.getQuote()
        .pipe(
          map(data => new LoadSuccessAction(data)),
          catchError(err => of(new LoadFailAction(JSON.stringify(err))))
        )
      )
    );

  constructor(private actions$: Actions, private service$: QuoteService) {
  }
}
