import {createReducer, on} from '@ngrx/store';
import {loginSuccess, logout, updateToken} from './auth.actions';
import {User} from "../../shared/interfaces/user";

export interface AuthState {
  token: string | null;
  user: User | null;
}

const userString = localStorage.getItem('user');
const user = userString ? JSON.parse(userString) : null;

export const initialState: AuthState = {
  token: localStorage.getItem('token') ?? null,
  user,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, {user}) => ({...state, user, token: user.token})),
  on(updateToken, (state, {token}) => ({...state, token})),
  on(logout, (state) => ({...state, token: null}))
);
