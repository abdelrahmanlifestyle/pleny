import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductsState} from "./products.reducer";

export const selectProductsState = createFeatureSelector<ProductsState>('auth');

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectCategories = createSelector(
  selectProductsState,
  (state: ProductsState) => state.categories
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);
