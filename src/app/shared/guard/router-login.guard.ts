import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class RouterLoginGuard implements CanActivate {
  constructor(private auth : AuthService, private router: Router){}
  canActivate(){
    if(this.auth.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login'])
      return false;
    }
  }
  // canDeactivate(){
  //   if(!this.auth.isUserLoggedIn()){
  //     return true
  //   }else{
  //     this.router.navigate([''])
  //     return false
  //   }
  // }
  
}
