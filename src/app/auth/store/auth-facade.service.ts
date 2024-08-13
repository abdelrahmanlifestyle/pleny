import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
import {login, refreshToken} from "./auth.actions";
import {selectIsLoggedIn, selectToken} from "./auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  token$ = this.store.select(selectToken);
  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  constructor(private store: Store, private authService: AuthService, private router: Router) {
  }

  login(email: string, password: string): void {
    this.store.dispatch(login({email, password}));
  }

  handleTokenExpiration() {
    const token = localStorage.getItem("token") || '';
    this.store.dispatch(refreshToken({token}));
  }
}
