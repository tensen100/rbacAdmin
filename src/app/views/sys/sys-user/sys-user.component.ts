import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SysUserService } from '../../../service/sys/sys-user.service';
import { SysUser } from '../../../types';
import { MatDialog } from '@angular/material';
import { SysUserEditModalComponent } from '../components/sys-user-edit-modal/sys-user-edit-modal.component';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sys-user',
  templateUrl: './sys-user.component.html',
  styleUrls: ['./sys-user.component.less']
})
export class SysUserComponent implements OnInit {
  list$: Observable<SysUser[]>;
  displayedColumns: string[] = [
    'id',
    'username',
    'telephone',
    'mail',
    'password',
    'dept_id',
    'status',
    'remark',
    'operator',
    'operator_time',
    'operator_ip',
    'operate'
  ];

  constructor(
    private $user: SysUserService,
    private dialog: MatDialog
  ) {
    this.list$ = this.$user.getUserList();
  }

  ngOnInit() {
  }

  remove(user: SysUser) {
    this.$user.remove(user.id).subscribe( res => console.log(res));
  }

  edit(data: SysUser) {
    this.dialog.open(SysUserEditModalComponent, {data})
      .afterClosed()
      .pipe(
        filter( res => !!res),
        switchMap(res => this.$user.update(res))
      )
      .subscribe(res => console.log(res));
  }
}
