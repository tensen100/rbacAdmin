import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EncryptInterceptor } from './interceptors/encrypt-interceptors';
import { HttpService } from './core/http.service';
import { SysUserService } from './sys/sys-user.service';
import { SysDeptService } from './sys/sys-dept.service';
import { SysModuleService } from './sys/sys-module.service';
import { SysRoleService } from './sys/sys-role.service';

@NgModule({})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: EncryptInterceptor,
          multi: true
        },
        HttpService,
        SysDeptService,
        SysModuleService,
        SysRoleService,
        SysUserService,
      ]
    };
  }
}
