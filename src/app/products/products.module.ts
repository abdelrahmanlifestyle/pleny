import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {StoreModule} from "@ngrx/store";
import {productsReducer} from "./store/products.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./store/products.effect";


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature({name: "product", reducer: productsReducer}),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsModule {
}
