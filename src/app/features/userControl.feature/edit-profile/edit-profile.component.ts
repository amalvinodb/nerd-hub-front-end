import { Component, OnInit } from '@angular/core';
import { editProfile } from '../edit-user.store/edit.action';
import { Store } from '@ngrx/store';
import * as fromUserProfile from '../user-profile.store/user-profile.reducre';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  userName: string | undefined = '';
  image: string | File | undefined | null = '';
  value: File | undefined;
  formdata = new FormData();
  selectedfile: File | undefined;
  userProfile$: Observable<UserProfile | null> | undefined;
  error$: Observable<UserProfile | null> | undefined;
  ngOnInit(): void {
    this.userProfile$ = this.store.select(fromUserProfile.selectUserProfile);
    this.error$ = this.store.select(fromUserProfile.selectUserProfile);
    this.userProfile$.subscribe((data) => {
      this.userName = data?.userName;
      if (data != null) {
        this.image = data.image;
      }
      if (data === null) {
      }
    });
  }
  constructor(
    private store: Store<fromUserProfile.State>,
    private router: Router
  ) {}
  submit() {
    const tocke = localStorage.getItem('tocken');
    if (tocke != null && this.userName != undefined) {
      const payload = {
        image: this.formdata,
        userName: this.userName,
        tocken: tocke,
      };
      // console.log(this.formdata.get('image'))
      this.store.dispatch(editProfile(payload));
    }
  }
  change(event: any) {
   console.log(event.target.files[0].size)
    if (event.target) {
      let reader = new FileReader();
      this.formdata.append('image', event.target.files[0]);
      // this.formdata.append('upload_preset', 'hk0nezym');
      // this.formdata.append('cloud_name', 'dchrawfgy');
      this.selectedfile = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      };
      console.log((this.formdata as any).size)
      // console.log(this.formdata)
    }
  }
}
interface UserProfile {
  userName: string;
  dateOfBirth: string;
  email: string;
  image: string;
  phone: string;
  discription: string;
  posts: String;
  following: String;
  followers: String;
}
