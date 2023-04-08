import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../login.store/login.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  constructor(private store: Store, private router: Router) {}

  hide = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = '';

  login() {
    if (this.email.value && this.password.length > 4) {
      const payload = {
        name: this.email.value,
        password: this.password,
      };
      this.store.dispatch(login(payload));
    } else {
      // console.log("not working")
    }
  }
  signup() {
    this.router.navigate(['signup']);
  }
}
