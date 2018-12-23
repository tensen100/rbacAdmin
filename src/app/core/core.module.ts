import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from '../app-routing.module';
import {ServiceModule} from '../service/service.module';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {loadSvgResources} from '../utils/svg.util';
import {AppStoreModule} from '../reducer';
import {AppEffectsModule} from '../effects';
import {BASE_CONFIG, HOST_URL} from '../config/base.config';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStoreModule,
    AppEffectsModule,
    ServiceModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        url: HOST_URL
      }
    }
  ]
})
export class CoreModule {
  // coreModule 只加载一次
  //  @SkipSelf() 避免死循环
  // @Optional() 首次加载
  constructor(
    @SkipSelf() @Optional() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载');
    }
    loadSvgResources(ir, ds);
  }
}
