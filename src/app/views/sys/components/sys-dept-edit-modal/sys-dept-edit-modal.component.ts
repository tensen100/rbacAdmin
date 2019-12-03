import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SysDept } from '../../../../types';
@Component({
  selector: 'app-sys-dept-edit-modal',
  templateUrl: './sys-dept-edit-modal.component.html',
  styleUrls: ['./sys-dept-edit-modal.component.less']
})
export class SysDeptEditModalComponent implements OnInit {
  form: FormGroup;
  options: SysDept[];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SysDeptEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {dept: SysDept, options: SysDept[]}
  ) {
    this.options = data.options;
    this.createForm(this.data.dept);
  }

  ngOnInit() {
  }

  save(event: Event, {value, valid}) {
    event.stopPropagation();
    event.preventDefault();
    if (valid) {
      this.dialogRef.close(value);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  private createForm(data: SysDept) {
    this.form = this.fb.group({
      id: [data.id],
      name: [data.name, Validators.required],
      parent_id: [data.parent_id || 0],
      seq: [data.seq || 0],
      remark: [data.remark]
    });
  }

}
