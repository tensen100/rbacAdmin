import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {ShareModule} from '../../share/share.module';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
