import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { paramsToString } from '../../utils';
import { ResponseData } from '../../types';

@Injectable()
export class HttpService {
  constructor(
    private http: HttpClient,
  ) {
  }

  get<T>(url, body?): Observable<T> {
    return this.handleResponse<T>(this.http.get<ResponseData<T>>(url + paramsToString(body)));
  }

  post<T>(url, body?): Observable<T> {
    return this.handleResponse(this.http.post<ResponseData<T>>(url, body));
  }

  private handleResponse = <T>(sourse: Observable<ResponseData<T>>): Observable<T>  => {
    return sourse.pipe(map(res => res.data));
  }
}
