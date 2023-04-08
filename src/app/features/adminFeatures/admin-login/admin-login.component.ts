import { Component } from '@angular/core';
import {AdminServiceService} from '../services/admin-service.service'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  constructor(private service:AdminServiceService){}
  email = '';
  password = '';
  hide = true;
  login() {
    if (this.email != undefined && this.password != undefined) {
      
      this.service.adminLogin(this.email,this.password).subscribe((data)=>{
        console.log(data);
        
      })
    }
  }
}
