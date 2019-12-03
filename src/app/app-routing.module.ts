import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './views/login/login.module#LoginModule',
  },
  {
    path: 'lottery',
    loadChildren: './views/lottery/lottery.module#LotteryModule',
  },
  {
    path: 'sys',
    loadChildren: './views/sys/sys.module#SysModule',
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
