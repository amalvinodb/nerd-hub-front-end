import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  value = ""
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem('tocken')
    this.router.navigate(['login'])
  }
  profile(){
    
    this.router.navigate(['profile'])
  }
  landing(){
    this.router.navigate([''])
  }
  settings(){
    this.router.navigate(['settings'])
  }
  create(){
    this.router.navigate(['create-posts'])
  }
}
