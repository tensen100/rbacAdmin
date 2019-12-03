import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotteryIndexComponent} from './lottery-index/lottery-index.component';

const routes: Routes = [
  {
    path: '',
    component: LotteryIndexComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LotteryRoutingModule {
}
