import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  PostId: string | undefined;
  constructor(private http: HttpClient) {}
  getAllPosts() {
    return this.http.get<any>('http://localhost:3000/user/getAllPost');
  }
  likePost(postId: string) {
    return this.http.post<any>('http://localhost:3000/user/likePost', {
      postId,
    });
  }
  makeComment(data: any) {
    return this.http.post<any>('http://localhost:3000/user/commentPost', {
      data
    });
  }
  getPost(postId: string) {
    return this.http.get<any>(
      'http://localhost:3000/user/getPost?postId=' + postId
    );
  }
}
