import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {selectCategories, selectFilter, selectProducts, selectProductsState} from "../store/products.selectors";
import {loadCategories, loadProducts} from "../store/products.actions";
import {initialState} from "../store/products.reducer";
import {LoadProductsParams} from "../../shared/interfaces/filter";

@Injectable({
  providedIn: 'root'
})
export class ProductsFacadeService {

  productsState$ = this.store.select(selectProductsState);
  products$ = this.store.select(selectProducts);
  categories$ = this.store.select(selectCategories);
  filter$ = this.store.select(selectFilter);
  initialProductsPage = initialState.productsPage;

  constructor(private store: Store, private router: Router) {
  }

  loadCategories(): void {
    this.store.dispatch(loadCategories());
  }

  loadProducts(params: LoadProductsParams): void {
    this.store.dispatch(loadProducts({...params}));
  }

}
