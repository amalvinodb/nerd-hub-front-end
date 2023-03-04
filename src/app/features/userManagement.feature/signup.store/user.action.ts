// signup.actions.ts

import { createAction, props } from '@ngrx/store';

export const signUp = createAction(
  '[Auth] Sign Up',
  props<{ userName: string, password: string, email: string, dateOfBirth: string,phone:string }>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign Up Success',
  props<{ message: string }>()
);

export const signUpFailure = createAction(
  '[Auth] Sign Up Failure',
  props<{ error: string }>()
);
