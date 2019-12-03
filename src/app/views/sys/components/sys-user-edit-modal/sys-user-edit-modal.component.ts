import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SysUser } from '../../../../types';

@Component({
  selector: 'app-sys-user-edit-modal',
  templateUrl: './sys-user-edit-modal.component.html',
  styleUrls: ['./sys-user-edit-modal.component.less']
})
export class SysUserEditModalComponent implements OnInit {
  userForm: FormGroup;
  title = 'Edit User';
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SysUserEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: SysUser
  ) {
    if (this.data.id) {
      this.title = 'New User';
    }
  }

  ngOnInit() {
    this.createFrom(this.data);
  }
  submit(event: Event, {value, valid}) {
    event.stopPropagation();
    event.preventDefault();
    if (valid) {
      this.dialogRef.close(value);
    }
  }
  cancel() {
    this.dialogRef.close();
  }
  private createFrom(user: SysUser) {
    this.userForm = this.fb.group({
      id: [user.id, Validators.required],
      username: [user.username, Validators.required],
      telephone: [user.telephone, Validators.required],
      mail: [user.mail, Validators.required],
      password: [user.password, Validators.required],
      dept_id: [user.dept_id, Validators.required],
      remark: [user.remark]
    });
  }

}
