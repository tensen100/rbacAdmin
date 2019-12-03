import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Observable } from 'rxjs';
import { SysUser } from '../../types';

@Injectable()
export class SysUserService {

  constructor(private http: HttpService) {
  }

  getUserList(): Observable<SysUser[]> {
    return this.http.get<SysUser[]>('admin/user/list');
  }
  update(user: SysUser): Observable<SysUser> {
    return this.http.post<SysUser>('admin/user/update', user);
  }
  add(user: SysUser): Observable<SysUser> {
    return this.http.post<SysUser>('admin/user/update', user);
  }
  remove(id: number): Observable<void> {
    return this.http.get('admin/user/update', {id});
  }
}
