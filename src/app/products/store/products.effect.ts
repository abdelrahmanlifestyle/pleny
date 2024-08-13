import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess
} from './products.actions';
import {ProductsDataService} from "../services/products-data.service";

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(({id}) => this.loadProductsByIdOrAll(id))
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      switchMap(() => this.loadCategories())
    )
  );

  constructor(private actions$: Actions, private productsDataService: ProductsDataService) {
  }

  private loadCategories() {
    return this.productsDataService.loadCategories().pipe(
      map(categories => loadCategoriesSuccess({categories})),
      catchError(error => of(loadCategoriesFailure({error})))
    );
  }

  private loadProductsByIdOrAll(id: string | null) {
    const loadProducts$ = id
      ? this.productsDataService.loadProductsByCategory(id)
      : this.productsDataService.loadAllProducts();

    return loadProducts$.pipe(
      map(productsPage => loadProductsSuccess({productsPage})),
      catchError(error => of(loadProductsFailure({error})))
    );
  }
}
