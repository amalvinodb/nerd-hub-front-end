import { createAction, props } from '@ngrx/store';

export interface UserProfile {
    userName: string;
    dateOfBirth: string;
    email: string;
    image: string;
    phone: string;
    discription:string;
    posts:String;
    following:String;
    followers:String;
  }
  
export const getUserProfile = createAction(
  '[User Profile] Get User Profile',
  
);

export const getUserProfileSuccess = createAction(
  '[User Profile] Get User Profile Success',
  props<{ userProfile: UserProfile }>()
);

export const getUserProfileFailure = createAction(
  '[User Profile] Get User Profile Failure',
  props<{ error: string }>()
);


