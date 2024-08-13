import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from "../shared/shared.module";

const LayoutComponents = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...LayoutComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
  ], exports: [
    ...LayoutComponents
  ]
})
export class LayoutModule {
}
