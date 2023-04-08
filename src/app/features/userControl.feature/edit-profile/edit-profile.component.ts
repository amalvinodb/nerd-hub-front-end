import { Component, OnInit } from '@angular/core';
import { editProfile } from '../edit-user.store/edit.action';
import { Store } from '@ngrx/store';
import * as fromUserProfile from '../user-profile.store/user-profile.reducre';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserServicesService} from '../../services/user-services.service'

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
  userProfile: any | undefined;

  profileDiscription:string|undefined;
  ngOnInit(): void {
    this.service.getProfile().subscribe((data) => {
      console.log(data);
      this.userProfile = data
      this.userName = data?.userName;
      this.profileDiscription = data.discription
      if (data != null) {
        this.image = data.image;
      }
      if (data === null) {
      }
    });
  }
  constructor(
    private store: Store<fromUserProfile.State>,
    private router: Router,
    private service:UserServicesService
  ) {}
  submit() {
    this.formdata.append('userName', this.userName!);
    this.formdata.append('profileDiscription',this.profileDiscription!)
    this.store.dispatch(editProfile({ image: this.formdata }));
  }
  change(event: any) {
    if (event.target) {
      let reader = new FileReader();
      this.formdata.append('image', event.target.files[0]);
      this.selectedfile = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      };
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
