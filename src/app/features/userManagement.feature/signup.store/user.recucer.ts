// auth.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { signUp, signUpSuccess, signUpFailure } from './user.action';

export interface AuthState {
  loading: boolean;
  message: string | null;
  error: string | null;
}

export const initialAuthState: AuthState = {
  loading: false,
  message: null,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(signUp, (state) => ({
    ...state,
    loading: true,
  })),
  on(signUpSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    message,
    error: null,
  })),
  on(signUpFailure, (state, { error }) => ({
    ...state,
    loading: false,
    message: null,
    error,
  })),
);
