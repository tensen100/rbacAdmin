import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import {ShareModule} from '../../share/share.module';
import {TaskRoutingModule} from './task-routing.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    ShareModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
