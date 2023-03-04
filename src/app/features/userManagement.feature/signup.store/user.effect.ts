import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { UserServicesService } from '../../services/user-services.service';
import { signUp, signUpSuccess, signUpFailure } from './user.action';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class AuthEffects {
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUp),
      mergeMap((payload) =>
        this.authService
          .signUp(
            payload.userName,
            payload.password,
            payload.email,
            payload.dateOfBirth,
            payload.phone
          )
          .pipe(
            map((response) => {
              const { status, message } = response;
              if (status) {
                this.router.navigate(['/login']);
                this.snackBar.open(message, 'Close', {
                  duration: 5000,
                });
                return signUpSuccess({ message });
              } else {
                this.snackBar.open(message, 'Close', {
                  duration: 5000,
                });
                return signUpFailure({ error: message });
              }
            }),
            catchError((error) =>{ 
              const errorMessage = "A login error has occoured please confirm the data that you have submitted";
              this.snackBar.open(errorMessage, 'Close', {
                duration: 5000,
              });
              return of(signUpFailure({ error: error.message }))
            })
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: UserServicesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}
