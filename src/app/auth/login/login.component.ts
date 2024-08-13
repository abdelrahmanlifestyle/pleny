import {Component, OnInit} from '@angular/core';
import {AuthFacadeService} from "../store/auth-facade.service";
import {filter, take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authFacade: AuthFacadeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authFacade.isLoggedIn$
      .pipe(
        take(1),
        filter(isLoggedIn => isLoggedIn),
      )
      .subscribe(() => this.router.navigateByUrl('/products').then());
  }

  onSubmit() {
    this.authFacade.login(this.email, this.password);
  }
}
