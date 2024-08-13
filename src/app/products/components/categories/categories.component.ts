import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Input() categories: Category[] = [];
  @Output() onSelectCategory = new EventEmitter();
}
