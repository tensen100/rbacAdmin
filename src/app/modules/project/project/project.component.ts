import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {Decrement, Increment, Reset} from '../../../actions/counter.actions';
import * as fromRoot from '../../../reducer';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent {
  count$: Observable<number>;

  constructor(private store: Store<fromRoot.State>) {
    this.count$ = store.pipe(select(fromRoot.getCount));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

}
