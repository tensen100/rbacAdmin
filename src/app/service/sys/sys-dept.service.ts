import { Injectable } from '@angular/core';
import { SysDept } from '../../types';
import { Observable } from 'rxjs';
import { HttpService } from '../core/http.service';

@Injectable()
export class SysDeptService {
  private readonly base_url = 'admin/sys_dept';
  constructor(private http: HttpService) {}

  find(): Observable<SysDept[]> {
    return this.http.get<SysDept[]>(this.base_url + '/find');
  }
  update(data: SysDept): Observable<SysDept> {
    return this.http.post(this.base_url + '/update', data);
  }
  destroy(id: number): Observable<void> {
    return this.http.get(this.base_url + '/destroy', {id});
  }
  create(data: SysDept): Observable<SysDept> {
    return this.http.post(this.base_url + '/create', data);
  }
}
