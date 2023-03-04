import { createReducer, on } from '@ngrx/store';
import { editProfile, editSuccess, editFailure } from './edit.action';

export interface userEditState {
  message: string;
  error: string;
}

const initialState: userEditState = {
  message: '',
  error: '',
};

export const eidtReducer = createReducer(
  initialState,
  on(editProfile, (state) => state),
  on(editSuccess, (state, { message }) => ({ ...state, message: message, error: '' })),
  on(editFailure, (state, { error }) => ({ ...state, message: '', error: error }))
);
