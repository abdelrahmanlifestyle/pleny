import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() count = 0;
  @Output() onAddToCard = new EventEmitter<Product>();
}
