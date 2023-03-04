import { Component,OnInit } from '@angular/core';
import {getUserProfile} from '../mainPage/user-profile.store/user-profile.actions'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import {selectUserProfile} from '../store/user-profile/user-profile.reducre'
import * as fromUserProfile from '../mainPage/user-profile.store/user-profile.reducre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  userProfile$: Observable<UserProfile | null>|undefined
  error$: Observable<UserProfile | null> | undefined

  constructor(private store:Store<fromUserProfile.State>,private router:Router){
    this.store.select(fromUserProfile.selectUserProfile).subscribe(data=>{
      console.log(data)
    })
  }
  
  ngOnInit(): void {
    const tocken = localStorage.getItem('tocken')
  if(tocken !=null){
    this.store.dispatch(getUserProfile({tocken:tocken}))
  }else{
    this.router.navigate([''])
  }
 
    this.userProfile$ = this.store.select(fromUserProfile.selectUserProfile);
    this.error$ = this.store.select(fromUserProfile.selectUserProfile);
  }
  editProfile(){
    this.router.navigate(['edit-profile'])
  }
}
interface UserProfile {
  userName: string;
  dateOfBirth: string;
  email: string;
  image: string;
  phone: string;
  discription:string;
  posts:String;
  following:String;
  followers:String;
}

