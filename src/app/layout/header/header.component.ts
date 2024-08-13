import {Component} from '@angular/core';
import {AuthFacadeService} from "../../auth/services/auth-facade.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  count = 3;

  constructor(public authFacade: AuthFacadeService, public router: Router) {
  }
}
