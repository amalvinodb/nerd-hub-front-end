import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ name: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ accessToken: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
