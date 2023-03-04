import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from '../signup.store/user.action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = '';
  dateOfBirth = '';
  // minDate:Date
  maxDate: Date = new Date();
  userName = '';
  phone = ''
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
    return true;
  }
  hide = true;
  submit() {
    let Email = this.email.value;
    // console.log(Email,this.email)
    if (Email != null&&this.password.length > 4&&this.phone.length === 10&&this.userName.length > 5) {
      this.store.dispatch(
        signUp({
          userName: this.userName,
          password: this.password,
          email: Email,
          dateOfBirth: this.dateOfBirth,
          phone:this.phone
        })
      );
    } else {
      console.log('not working');
      // location.reload()
    }
  }
  login(){
    this.router.navigate(['login'])
  }
  constructor(private store: Store,private router:Router) {}
  // this.email.errors === null && this.dateOfBirth != undefined
}
