import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserProfileActions from './user-profile.actions';
import { UserServicesService } from '../../services/user-services.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface UserProfile {
  userName: string;
  dateOfBirth: string;
  email: string;
  image: string;
  phone: string;
  discription: string;
  posts: String;
  following: String;
  followers: String;
}
@Injectable()
export class UserProfileEffects {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.getUserProfile),
      switchMap((action) =>{
        // console.log(action,"this is from the effect and to be read")
        return this.userServices.getProfile(action.tocken).pipe(
          map((userProfile: UserProfile) => {
            // console.log(userProfile);
            return UserProfileActions.getUserProfileSuccess({ userProfile });
          }),
          catchError((error) => {
            if (error.error.message == 'invalid tocken') {
              localStorage.removeItem('tocken');
              this.router.navigate(['login']);
              // console.log(error);
              this.snackBar.open(error.error.message, 'Close', {
                duration: 5000,
              });
            }

            return of(
              UserProfileActions.getUserProfileFailure({ error: error.message })
            );
          })
        )}
      )
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private userServices: UserServicesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}
