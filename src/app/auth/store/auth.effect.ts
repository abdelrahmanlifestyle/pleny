import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthDataService} from '../services/auth-data.service';
import * as AuthActions from './auth.actions';
import {of} from 'rxjs';
import {User} from "../../shared/interfaces/user";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    exhaustMap(action => this.authDataService.login(action.email, action.password).pipe(
      map(response => this.handleLoginSuccess(response)),
      catchError(error => this.handleError(error))
    ))
  ));
  refreshToken$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.refreshToken),
    exhaustMap(action => this.authDataService.refreshToken(action.token).pipe(
      map(response => this.handleUpdateToken(response.token)),
      catchError(error => this.handleError(error, true))
    ))
  ));
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    map(response => this.handleLogout()),
    catchError(error => this.handleError(error, true))
  ), {dispatch: false});

  constructor(
    private actions$: Actions,
    private router: Router,
    private authDataService: AuthDataService
  ) {
  }

  private handleLoginSuccess(user: User) {
    localStorage.setItem('token', user.token);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/products']).then();
    return AuthActions.loginSuccess({user});
  }

  private handleLogout() {
    localStorage.clear();
    this.router.navigate(['/auth']).then();
  }

  private handleUpdateToken(token: string) {
    localStorage.setItem('token', token);
    return AuthActions.updateToken({token});
  }

  private handleError(error: any, logout = false) {
    if (logout) {
      this.router.navigate(['/auth']).then();
    } else {
      alert('Login failed. Please try again.');
    }
    return of(AuthActions.loginFailure({error}));
  }
}
