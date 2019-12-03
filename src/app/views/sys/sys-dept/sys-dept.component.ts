import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SysDept } from '../../../types';
import { SysDeptService } from '../../../service/sys/sys-dept.service';
import { MatDialog } from '@angular/material';
import { SysDeptEditModalComponent } from '../components/sys-dept-edit-modal/sys-dept-edit-modal.component';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sys-dept',
  templateUrl: './sys-dept.component.html',
  styleUrls: ['./sys-dept.component.less']
})
export class SysDeptComponent implements OnInit {
  list: SysDept[];
  displayedColumns: string[] = ['id', 'name', 'level', 'parent_id', 'seq', 'remark', 'operator', 'operator_time', 'operator_ip', 'operate'];

  constructor(
    private $dept: SysDeptService,
    private dialog: MatDialog
  ) {
    this.find();
  }

  ngOnInit() {
  }

  create() {
    this.dialog.open(SysDeptEditModalComponent, {
      data: {
        dept: {},
        options: this.list
      }
    })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(res => this.$dept.create(res))
      )
      .subscribe(() => this.find());
  }

  edit(data: SysDept) {
    this.dialog.open(SysDeptEditModalComponent, {data})
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(res => this.$dept.update(res))
      ).subscribe(res => Object.assign(data, res));
  }

  destroy(data: SysDept) {
    this.$dept.destroy(data.id).subscribe(() => this.find());
  }

  private find() {
    this.$dept.find().subscribe(res => this.list = res);
  }
}
