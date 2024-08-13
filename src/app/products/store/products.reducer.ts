import {createReducer, on} from '@ngrx/store';
import {
  loadCategories,
  loadCategoriesSuccess,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess
} from './products.actions';
import {Category, Product} from "../../shared/interfaces/product";

export interface ProductsState {
  products: Product[];
  categories: Category[];
  loading: boolean;
  error: any;
}

export const initialState: ProductsState = {
  products: [],
  categories: [],
  loading: false,
  error: null
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({
    ...state,
    loading: true
  })),
  on(loadProductsSuccess, (state, {products}) => ({
    ...state,
    products,
    loading: false
  })),
  on(loadProductsFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(loadCategories, (state) => ({
    ...state,
    loading: true
  })),
  on(loadCategoriesSuccess, (state, {categories}) => ({
    ...state,
    categories,
    loading: false
  })),
  on(loadProductsFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
);
