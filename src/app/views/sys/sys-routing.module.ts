import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysUserComponent } from './sys-user/sys-user.component';
import { SysModuleComponent } from './sys-module/sys-module.component';
import { SysRoleComponent } from './sys-role/sys-role.component';
import { SysDeptComponent } from './sys-dept/sys-dept.component';

const routes: Routes = [
  {
    path: 'user',
    component: SysUserComponent
  },
  {
    path: 'module',
    component: SysModuleComponent
  },
  {
    path: 'role',
    component: SysRoleComponent
  },
  {
    path: 'dept',
    component: SysDeptComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SysRoutingModule {
}
