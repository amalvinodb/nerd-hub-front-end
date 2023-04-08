import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isUserLoggedIn(){
    // localStorage.removeItem('tocken')
    return !!localStorage.getItem('tocken')
    
  }
  isAdminLoggedIn(){
    return !!localStorage.getItem('AdminTocken')
  }
}
