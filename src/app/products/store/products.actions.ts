import {createAction, props} from '@ngrx/store';
import {Category, ProductsPage} from "../../shared/interfaces/product";

export const loadCategories = createAction('[Product] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Products] Load Categories Success',
  props<{ categories: Category[] }>()
);
export const loadCategoriesFailure = createAction(
  '[Products] Load Categories Failure',
  props<{ error: any }>()
);

export const loadProducts = createAction('[Products] Load Products',
  props<{
    selectedCategory?: string,
    skip?: number,
    search?: string,
    sort?: string,
  }>());
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ productsPage: ProductsPage }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);
