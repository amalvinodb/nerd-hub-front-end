import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
interface ExtendedFormData extends FormData {
  entries(): IterableIterator<[string, FormDataEntryValue]>;
}
@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  private signUpUrl = 'http://localhost:3000/signup';
  private loginUrl = 'http://localhost:3000/login';
 

  constructor(private http: HttpClient) {}

  signUp(
    userName: string,
    password: string,
    email: string,
    dateOfBirth: string,
    phone: string
  ): Observable<any> {
    const data = { userName, password, email, dateOfBirth, phone };
    return this.http.post(this.signUpUrl, data);
  }

  login(name: string, password: string): Observable<any> {
    // console.log(name,password,"this is login ")
    return this.http.post<any>(
      this.loginUrl,
      { name, password }
    );
  }
  getProfile(tocken: String): Observable<any> {
    console.log("tocken")
    return this.http.get<any>(
      'http://localhost:3000/user/user-profile'
    );
  }
  editUser(image:FormData,userName:String,tocken:String){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(image.get('image'),userName)
    return this.http.post<any>('http://localhost:3000/user/editUserName',{userName,image},{headers})
  }
}
