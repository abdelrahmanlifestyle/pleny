import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const MODULES = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  NgOptimizedImage
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ], exports: [
    ...MODULES
  ]
})
export class SharedModule {
}
