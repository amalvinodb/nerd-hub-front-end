import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) {}

  adminLogin(UserName:string,Password:string){
    const data = {
      user:UserName,
      password:Password
    }
    return this.http.post<any>('http://localhost:3000/admin/login',data)
  }
  userDetails(){
    return this.http.get<any>('http://localhost:3000/admin')
  }
}
