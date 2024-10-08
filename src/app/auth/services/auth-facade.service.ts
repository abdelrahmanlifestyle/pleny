import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {login, refreshToken} from "../store/auth.actions";
import {selectIsLoggedIn, selectUser} from "../store/auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  selectUser$ = this.store.select(selectUser);
  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  constructor(private store: Store, private router: Router) {
  }

  login(email: string, password: string): void {
    this.store.dispatch(login({email, password}));
  }

  handleTokenExpiration() {
    try {
      const token = JSON.parse(localStorage.getItem('user') || '')?.refreshToken;
      this.store.dispatch(refreshToken({token}));
    } catch (error) {
      console.error(error)
      localStorage.clear();
      this.router.navigate(['/auth']).then();
    }
  }
}
