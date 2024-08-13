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

  constructor(
    protected productsFacadeService: ProductsFacadeService,
    private cartService: CartService
  ) {
  }


  ngOnInit() {
    this.productsFacadeService.loadProducts(null);
    this.productsFacadeService.loadCategories();
  }

  onSelectCategory($event: any) {
    this.productsFacadeService.loadProducts($event.target.value);
  }


  onAddToCard(product: Product) {
    this.count++;
    this.cartService.count$.next(this.count)
  }
}
