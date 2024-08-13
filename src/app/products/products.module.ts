import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {StoreModule} from "@ngrx/store";
import {productsReducer} from "./store/products.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./store/products.effect";
import {CategoriesComponent} from './components/categories/categories.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductCardComponent} from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    ProductsListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature({name: "product", reducer: productsReducer}),
    EffectsModule.forFeature([ProductsEffects]),
    NgOptimizedImage
  ]
})
export class ProductsModule {
}
