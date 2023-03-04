import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as EditUserActions from './edit.action';
import { UserServicesService } from '../../services/user-services.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface UserProfile {
  userName: string;
  data: FormData;
}
@Injectable()
export class EditUserEffects {
  eidtUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditUserActions.editProfile),
      mergeMap(({ image, userName, tocken }) =>
        this.userServices.editUser(image, userName, tocken).pipe(
          map((response) =>{
            localStorage.removeItem('tocken')
            localStorage.setItem('tocken',response.tocken)
            // console.log(response.tocken)
            return EditUserActions.editSuccess({ message: response.message })}
          ),
          catchError((error) =>
            of(EditUserActions.editFailure({ error: error.message }))
          )
        )
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
