import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from "../layout/layout.module";

const CORE_MODULES = [
  CommonModule,
  LayoutModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...CORE_MODULES
  ], providers: [
    // singleton services
  ], exports: [
    ...CORE_MODULES
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
