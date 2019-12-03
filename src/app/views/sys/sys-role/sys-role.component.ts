import { Component, OnInit } from '@angular/core';
import { SysRoleService } from '../../../service/sys/sys-role.service';
import { Observable } from 'rxjs';
import { SysRole } from '../../../types';

@Component({
  selector: 'app-sys-role',
  templateUrl: './sys-role.component.html',
  styleUrls: ['./sys-role.component.less']
})
export class SysRoleComponent implements OnInit {
  list$: Observable<SysRole[]>;
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'status',
    'remark',
    'operator',
    'operator_time',
    'operator_ip',
  ];

  constructor(private $role: SysRoleService) {
  }

  ngOnInit() {
    console.log(123412);
    this.list$ = this.$role.getRoleList();
  }

}
