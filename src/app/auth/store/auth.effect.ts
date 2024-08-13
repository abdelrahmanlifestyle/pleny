import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import * as AuthActions from './auth.actions';
import {of} from "rxjs";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(action =>
        this.authService.login(action.email, action.password).pipe(
          map(({token}) => this.setNewToken(token)),
          catchError(error => this.handleError(error))
        )
      )
    )
  );


  refreshToken$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.refreshToken),
      exhaustMap(action =>
        this.authService.refreshToken(action.token).pipe(
          map(({token}) => this.setNewToken(token)),
          catchError(error => this.handleError(error))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) {
  }

  setNewToken(token: string) {
    localStorage.setItem('token', token);
    this.router.navigate(['/products']).then()
    return AuthActions.loginSuccess({token})
  }

  handleError(error: any) {
    alert('Login failed. Please try again.');
    return of(AuthActions.loginFailure({error}))
  }
}
