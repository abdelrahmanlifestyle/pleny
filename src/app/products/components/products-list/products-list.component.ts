import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, ProductsPage} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() currentPage = 1;
  @Input() products!: ProductsPage;
  @Output() onAddToCard = new EventEmitter<Product>();
  @Output() onPageChange = new EventEmitter<number>();


  calculateTotalPages(): number {
    if (this.products && this.products.total && this.products.limit) {
      return Math.ceil(this.products.total / this.products.limit);
    }
    return 0;
  }
}
