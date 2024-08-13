import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {selectCategories, selectProducts} from "../store/products.selectors";
import {loadCategories, loadProducts} from "../store/products.actions";
import {initialState} from "../store/products.reducer";

@Injectable({
  providedIn: 'root'
})
export class ProductsFacadeService {

  products$ = this.store.select(selectProducts);
  categories$ = this.store.select(selectCategories);
  initialProductsPage = initialState.productsPage;

  constructor(private store: Store, private router: Router) {
  }

  loadCategories(): void {
    this.store.dispatch(loadCategories());
  }

  loadProducts(id: string | null): void {
    this.store.dispatch(loadProducts({id}));
  }

}
