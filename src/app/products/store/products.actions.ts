import {createAction, props} from '@ngrx/store';
import {Category, Product} from "../../shared/interfaces/product";

export const loadCategories = createAction('[Product] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Products] Load Categories Success',
  props<{ categories: Category[] }>()
);
export const loadCategoriesFailure = createAction(
  '[Products] Load Categories Failure',
  props<{ error: any }>()
);

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsById = createAction('[Products] Load Products',
  props<{ id: string }>());
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);
