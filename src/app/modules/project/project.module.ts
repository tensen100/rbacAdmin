import {NgModule} from '@angular/core';
import {ProjectComponent} from './project/project.component';
import {ShareModule} from '../../share/share.module';
import {ProjectRoutingModule} from './project-routing.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    ShareModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule { }
