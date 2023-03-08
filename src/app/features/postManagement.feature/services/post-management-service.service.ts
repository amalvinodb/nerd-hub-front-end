import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostManagementServiceService {

  constructor(private http: HttpClient) { }
  setPost(image:FormData,discription:string){
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data;');
    console.log(image.get('image'))
    return this.http.post<any>('http://localhost:3000/user/makePost',image)
  }
}
