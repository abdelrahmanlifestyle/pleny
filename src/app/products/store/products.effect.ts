import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
  loadProducts,
  loadProductsById,
  loadProductsFailure,
  loadProductsSuccess
} from './products.actions';
import {ProductsDataService} from "../services/products-data.service";

@Injectable()
export class ProductsEffects {

  loadAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productsDataService.loadAllProducts().pipe(
          map(products => loadProductsSuccess({products})),
          catchError(error => of(loadProductsFailure({error})))
        )
      )
    )
  );

  loadProductsById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsById),
      switchMap(({id}) =>
        this.productsDataService.loadProductsByCategory(id).pipe(
          map(products => loadProductsSuccess({products})),
          catchError(error => of(loadProductsFailure({error})))
        )
      )
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      switchMap(() =>
        this.productsDataService.loadCategories().pipe(
          map(categories => loadCategoriesSuccess({categories})),
          catchError(error => of(loadCategoriesFailure({error})))
        )
      )
    )
  );

  constructor(private actions$: Actions, private productsDataService: ProductsDataService) {
  }
}
