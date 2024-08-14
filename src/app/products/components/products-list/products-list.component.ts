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
  @Output() onSortChange = new EventEmitter<string>();


  calculateTotalPages(): number {
    if (this.products && this.products.total) {
      return Math.ceil(this.products.total / 30);
    }
    return 0;
  }

  handleOnSortChange(e: any) {
    const selectElement = e.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.onSortChange.emit(selectedValue)
  }
}
