import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserServicesService } from '../../services/user-services.service';
import * as AuthActions from './login.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) =>{
        // console.log(action)
        return this.authService.login(action.name, action.password).pipe(
          map((response) => {
            const { status, message, tocken } = response;
            if (status) {
              this.router.navigate(['/']);
              this.snackBar.open(message, 'Close', {
                duration: 5000,
              });
              localStorage.setItem('tocken', tocken);

              return AuthActions.loginSuccess({
                accessToken: response.access_token,
              });
            } else {
                this.router.navigate(['/login']);
                this.snackBar.open(message, 'Close', {
                  duration: 5000,
                });
              return AuthActions.loginFailure({ error: message });
            }
          }),
          catchError((error) =>{
            console.log(error.error.error)
            this.router.navigate(['/login']);
                this.snackBar.open(error.error.error, 'Close', {
                  duration: 5000,
                });
            return of(AuthActions.loginFailure({ error: error.message }))
          }
            
          )
        )}
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
