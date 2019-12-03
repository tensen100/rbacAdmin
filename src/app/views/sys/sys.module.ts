import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysUserComponent } from './sys-user/sys-user.component';
import { SysRoleComponent } from './sys-role/sys-role.component';
import { SysModuleComponent } from './sys-module/sys-module.component';
import { SysDeptComponent } from './sys-dept/sys-dept.component';
import { SysRoutingModule } from './sys-routing.module';
import { ShareModule } from '../../share/share.module';
import { SysUserEditModalComponent } from './components/sys-user-edit-modal/sys-user-edit-modal.component';
import { SysRoleEditModalComponent } from './components/sys-role-edit-modal/sys-role-edit-modal.component';
import { SysModuleEditModalComponent } from './components/sys-module-edit-modal/sys-module-edit-modal.component';
import { SysDeptEditModalComponent } from './components/sys-dept-edit-modal/sys-dept-edit-modal.component';

@NgModule({
  declarations: [
    SysUserComponent,
    SysRoleComponent,
    SysModuleComponent,
    SysDeptComponent,
    SysUserEditModalComponent,
    SysRoleEditModalComponent,
    SysModuleEditModalComponent,
    SysDeptEditModalComponent
  ],
  imports: [
    CommonModule,
    SysRoutingModule,
    ShareModule,
  ],
  entryComponents: [
    SysUserEditModalComponent,
    SysRoleEditModalComponent,
    SysModuleEditModalComponent,
    SysDeptEditModalComponent
  ]
})
export class SysModule {
}
