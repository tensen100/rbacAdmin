import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SysModule } from '../../types';
import { HttpService } from '../core/http.service';

@Injectable()
export class SysModuleService {


  constructor(private http: HttpService) {}

  getModuleList(): Observable<SysModule[]> {
    return this.http.get<SysModule[]>('admin/module/list');
  }
}
