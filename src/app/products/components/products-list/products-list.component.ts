import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, ProductsPage} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() products!: ProductsPage;
  @Output() onAddToCard = new EventEmitter<Product>();
}
