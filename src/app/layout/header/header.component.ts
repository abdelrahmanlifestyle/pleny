import {Component} from '@angular/core';
import {AuthFacadeService} from "../../auth/store/auth-facade.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authFacade: AuthFacadeService, public router: Router) {
  }
}
