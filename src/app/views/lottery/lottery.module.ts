import {NgModule} from '@angular/core';
import {LotteryIndexComponent} from './lottery-index/lottery-index.component';
import {ShareModule} from '../../share/share.module';
import {LotteryRoutingModule} from './lottery-routing.module';

@NgModule({
  declarations: [LotteryIndexComponent],
  imports: [
    ShareModule,
    LotteryRoutingModule,
  ]
})
export class LotteryModule {}
