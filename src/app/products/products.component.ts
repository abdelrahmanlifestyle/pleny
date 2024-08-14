import {Component, OnInit} from '@angular/core';
import {ProductsFacadeService} from "./services/products-facade.service";
import {Product} from "../shared/interfaces/product";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  count = 0;
  selectedCategory: string = '';

  constructor(
    protected productsFacadeService: ProductsFacadeService,
    private cartService: CartService
  ) {
  }


  ngOnInit() {
    this.productsFacadeService.loadProducts({});
    this.productsFacadeService.loadCategories();
    this.productsFacadeService.productsState$.subscribe(state => {
      this.selectedCategory = state.categories.find(c => c.slug === state.filter.selectedCategory)?.name || '';
    })
  }


  onSelectCategory($event: any) {
    this.productsFacadeService.loadProducts({selectedCategory: $event.target.value || ''});
  }


  onAddToCard(product: Product) {
    this.count++;
    this.cartService.count$.next(this.count)
  }

  onSort($event: string) {
    this.productsFacadeService.loadProducts({sort: $event});
  }

  onPageChange($event: number) {
    this.productsFacadeService.loadProducts({skip: ($event - 1) * 30});
  }
}
