import {Component} from '@angular/core';
import {AuthFacadeService} from "../../auth/services/auth-facade.service";
import {CartService} from "../../products/services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public authFacade: AuthFacadeService,
    public cartService: CartService) {
  }
}
