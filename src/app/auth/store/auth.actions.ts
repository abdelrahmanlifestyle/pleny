import {createAction, props} from '@ngrx/store';
import {User} from "../../core/interfaces/user";

export const login = createAction(
  '[Auth] Login',
  props<{ email: string, password: string }>()
);

export const refreshToken = createAction(
  '[Auth] refresh token',
  props<{ token: string }>()
);

export const getUser = createAction(
  '[Auth] get user',
  props<{ token: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const updateToken = createAction(
  '[Auth] update token',
  props<{ token: string }>()
);

export const loginFailure = createAction('[Auth] Logout',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');
