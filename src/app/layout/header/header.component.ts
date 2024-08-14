import {Component} from '@angular/core';
import {AuthFacadeService} from "../../auth/services/auth-facade.service";
import {CartService} from "../../products/services/cart.service";
import {ProductsFacadeService} from "../../products/services/products-facade.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public authFacade: AuthFacadeService,
    public productsFacadeService: ProductsFacadeService,
    public cartService: CartService) {
  }

  onSearch(event: any) {
    this.productsFacadeService.loadProducts({search: event.target.value});
  }
}
