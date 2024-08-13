import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthFacadeService} from "../../auth/services/auth-facade.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthFacadeService, private router: Router) {
  }

  canActivate(): boolean {
    let isAuthenticated = false;
    this.auth.isLoggedIn$.subscribe((value) => {
      isAuthenticated = value;
    });

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/auth']).then();
      return false;
    }
  }
}
