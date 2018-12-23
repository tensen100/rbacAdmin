import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Quote} from '../domain';
import {HttpClient} from '@angular/common/http';
import {BASE_CONFIG} from '../config/base.config';

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient, @Inject(BASE_CONFIG) private config) { }
  getQuote(): Observable<Quote> {
    const url = `${this.config.url}/quote/random`;
    return this.http.get(url).pipe(
      map( res => {
        console.log(res);
        return res as Quote;
      })
    );
  }
}
