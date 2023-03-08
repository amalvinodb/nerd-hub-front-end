import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';

import {AuthEffects} from './features/userManagement.feature/signup.store/user.effect'
import { authReducer } from './features/userManagement.feature/signup.store/user.recucer';
import { LoginReducer } from './features/userManagement.feature/login.store/login.reducer'
import { LoginEffects } from './features/userManagement.feature/login.store/login.effect'
import {UserProfileEffects} from './features/userControl.feature/user-profile.store/user-profile.effect'
import {userProfileReducer} from './features/userControl.feature/user-profile.store/user-profile.reducre'
import {EditUserEffects} from './features/userControl.feature/edit-user.store/edit.effect'
import {eidtReducer} from './features/userControl.feature/edit-user.store/edit.reducer'

import {AuthInterceptor} from '../app/shared/interceptor/apiHeader.interceptor'

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {CloudinaryModule} from '@cloudinary/ng'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './features/userManagement.feature/sign-up/sign-up.component';
import { LogInComponent } from './features/userManagement.feature/log-in.store/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './features/mainPage.feature/landing/landing.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserNavComponent } from './shared/components/user-nav/user-nav.component';
import { AdminNavComponent } from './shared/components/admin-nav/admin-nav.component';
import { UserProfileComponent } from './features/userControl.feature/user-profile/user-profile.component';
import { PostComponent } from './features/mainPage.feature/post/post.component';
import { SettingsComponent } from './features/settings/settings.component';
import { EditProfileComponent } from './features/userControl.feature/edit-profile/edit-profile.component';
import { PostsComponent } from './features/postManagement.feature/posts/posts.component';
import { ArrayValuePipe } from './shared/pipes/array-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    LandingComponent,
    UserNavComponent,
    AdminNavComponent,
    UserProfileComponent,
    PostComponent,
    SettingsComponent,
    EditProfileComponent,
    PostsComponent,
    ArrayValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forRoot({auth:authReducer,signup:LoginReducer,userProfile:userProfileReducer,editUser:eidtReducer}, {}),
    EffectsModule.forRoot([AuthEffects,LoginEffects,UserProfileEffects,EditUserEffects]),
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    CloudinaryModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
