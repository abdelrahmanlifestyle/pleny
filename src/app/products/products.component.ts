import {Component, OnInit} from '@angular/core';
import {ProductsFacadeService} from "./services/products-facade.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsFacadeService: ProductsFacadeService
  ) {
  }

  ngOnInit() {
    this.productsFacadeService.loadProducts(null);
    this.productsFacadeService.loadCategories();
  }

}
