import { Component, OnInit } from '@angular/core';
import { SysModuleService } from '../../../service/sys/sys-module.service';
import { Observable } from 'rxjs';
import { SysModule } from '../../../types';

@Component({
  selector: 'app-sys-module',
  templateUrl: './sys-module.component.html',
  styleUrls: ['./sys-module.component.less']
})
export class SysModuleComponent implements OnInit {
  list$: Observable<SysModule[]>;
  displayedColumns: string[] = [
    'id',
    'name',
    'parent_id',
    'level',
    'seq',
    'status',
    'remark',
    'operator',
    'operator_time',
    'operator_ip',
  ];
  constructor(private $module: SysModuleService) {
    this.list$ = $module.getModuleList();
  }

  ngOnInit() {}

}
