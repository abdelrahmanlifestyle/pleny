import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PaginationComponent} from './components/pagination/pagination.component';

const MODULES = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  NgOptimizedImage
];


const COMPONENTS = [PaginationComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ], exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule {
}
