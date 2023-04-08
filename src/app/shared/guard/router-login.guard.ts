import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class RouterLoginGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate() {
    if (this.auth.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
    return false;
  }
}
