import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate() {
    if (this.auth.isAdminLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['admin/login']);
    }
    return false;
  }
}
