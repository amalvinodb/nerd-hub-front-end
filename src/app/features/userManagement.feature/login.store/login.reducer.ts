import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './login.actions';

export interface AuthState {
  accessToken: string | null;
  error: string | null;
}

export const initialAuthState: AuthState = {
  accessToken: null,
  error: null
};

export const LoginReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, { accessToken }) => ({ ...state, accessToken })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error }))
);
