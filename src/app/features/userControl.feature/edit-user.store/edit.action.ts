
import { createAction, props } from '@ngrx/store';

export const editProfile = createAction(
  '[User Edit] Edit Request',
  props<{ image:FormData,userName:String,tocken:String }>()
);

export const editSuccess = createAction(
  '[User Edit] Sign Up Success',
  props<{ message: string }>()
);

export const editFailure = createAction(
  '[User Edit] Sign Up Failure',
  props<{ error: string }>()
);