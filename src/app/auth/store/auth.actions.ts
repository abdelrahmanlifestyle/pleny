import {createAction, props} from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string, password: string }>()
);

export const refreshToken = createAction(
  '[Auth] refresh token',
  props<{ token: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string }>()
);

export const loginFailure = createAction('[Auth] Logout',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');
