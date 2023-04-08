import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonErrorHandlerService implements ErrorHandler {
  constructor(private router: Router) {}
  handleError(error: any) {
    if (error.error) {
      if (
        error.error.message == 'jwt malformed' ||
        error.error.message == 'jwt expired'
      ) {
        console.log(error.error.message);
        localStorage.removeItem('tocken');
        this.router.navigate(['login']);
      }
      console.error('An error occurred:', error);
    }
  }
}
