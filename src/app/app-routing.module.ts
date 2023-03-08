import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './features/mainPage.feature/landing/landing.component';
import { LogInComponent } from './features/userManagement.feature/log-in.store/log-in.component';
import { SignUpComponent } from './features/userManagement.feature/sign-up/sign-up.component';
import { RouterLoginGuard } from './shared/guard/router-login.guard'
import {RouterLogoutGuard} from './shared/guard/router-logout.guard'
import {UserProfileComponent} from './features/userControl.feature/user-profile/user-profile.component'
import {SettingsComponent} from './features/settings/settings.component'
import {EditProfileComponent} from './features/userControl.feature/edit-profile/edit-profile.component'
import {PostsComponent} from './features/postManagement.feature/posts/posts.component'

const routes: Routes = [
  {path:'',component:LandingComponent,canActivate:[RouterLoginGuard]},
  {path:'signup',component:SignUpComponent,canActivate:[RouterLogoutGuard]},
  {path:'login',component:LogInComponent,canActivate:[RouterLogoutGuard]},
  {path:'profile',component:UserProfileComponent,canActivate:[RouterLoginGuard]},
  {path:'settings',component:SettingsComponent,canActivate:[RouterLoginGuard]},
  {path:'edit-profile',component:EditProfileComponent,canActivate:[RouterLoginGuard]},
  {path:'create-posts',component:PostsComponent,canActivate:[RouterLoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
