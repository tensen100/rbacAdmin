import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../core/http.service';
import { SysRole } from '../../types';

@Injectable()
export class SysRoleService {

  constructor(private http: HttpService) {}

  getRoleList(): Observable<SysRole[]> {
    console.log(33333);
    return this.http.get<SysRole[]>('/admin/role/list');
  }
}
