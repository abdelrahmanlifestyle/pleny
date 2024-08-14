import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {debounceTime, distinctUntilChanged, of, withLatestFrom} from 'rxjs';
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
import {Store} from "@ngrx/store";
import {selectProductsState} from "./products.selectors";

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      debounceTime(500),
      distinctUntilChanged(),
      withLatestFrom(this.store.select(selectProductsState)),
      switchMap(([action, state]) => {
        const {selectedCategory, sort, search, skip} = action;
        const filter = state.filter
        // Merge the new action parameters with the current state
        const mergedParams = {
          selectedCategory: (selectedCategory ?? filter.selectedCategory) || '',
          sort: sort ?? filter.sort,
          search: search ?? filter.search,
          skip: skip ?? 0,
        };


        return this.loadProductsByCategoryOrAll(
          mergedParams.selectedCategory,
          mergedParams.sort,
          mergedParams.search,
          mergedParams.skip,
        );
      })
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      switchMap(() => this.loadCategories())
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private productsDataService: ProductsDataService
  ) {
  }

  private loadCategories() {
    return this.productsDataService.loadCategories().pipe(
      map(categories => loadCategoriesSuccess({categories})),
      catchError(error => of(loadCategoriesFailure({error})))
    );
  }

  private loadProductsByCategoryOrAll(
    selectedCategory = '',
    sort: string | undefined,
    search: string | undefined,
    skip: number | undefined,
  ) {
    const loadProducts$ = selectedCategory
      ? this.productsDataService.loadProductsByCategory(selectedCategory, sort, search, skip)
      : this.productsDataService.loadAllProducts(sort, search, skip);

    return loadProducts$.pipe(
      map(productsPage => loadProductsSuccess({productsPage})),
      catchError(error => of(loadProductsFailure({error})))
    );
  }
}
