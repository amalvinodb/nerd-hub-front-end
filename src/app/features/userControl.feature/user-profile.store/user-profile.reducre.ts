import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
// import { UserProfile } from './user-profile.model';
import * as UserProfileActions from './user-profile.actions';

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
export interface State {
  userProfile: UserProfile | null;
  error: string | null;
}

const initialState: State = {
  userProfile: null,
  error: null,
};

export const userProfileReducer = createReducer(
  initialState,
  on(UserProfileActions.getUserProfileSuccess, (state, { userProfile }) => ({
    ...state,
    userProfile,
    error: null,
  })),
  on(UserProfileActions.getUserProfileFailure, (state, { error }) => ({
    ...state,
    userProfile: null,
    error,
  })),

);

// export const selectUserProfile = (state: State) => state.userProfile;
// export const selectUserProfileError = (state: State) => state.error;
export const selectUserProfileState = createFeatureSelector<State>('userProfile');

export const selectUserProfile = createSelector(
  selectUserProfileState,
  (state: State) => state.userProfile
);