import {createReducer, on} from '@ngrx/store';
import {
  loadCategories,
  loadCategoriesSuccess,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess
} from './products.actions';
import {Category, ProductsPage} from "../../shared/interfaces/product";

export interface ProductsState {
  productsPage: ProductsPage;
  categories: Category[];
  filter: {
    skip: number,
    search: string,
    sort: string,
    selectedCategory: string | null;
  }
  loading: boolean;
  error: any;
}

export const initialState: ProductsState = {
  productsPage: {
    products: [],
    limit: 30,
    skip: 0,
    total: 0
  },
  filter: {
    skip: 0,
    selectedCategory: null,
    search: '',
    sort: '',
  },
  categories: [],
  loading: false,
  error: null
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state, params) => ({
    ...state,
    filter: {
      ...state.filter,
      ...params
    },
    loading: true
  })),
  on(loadProductsSuccess, (state, {productsPage}) => ({
    ...state,
    productsPage,
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
