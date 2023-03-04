import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // add authorization header to request
    const token = localStorage.getItem('tocken');
    if (token) {
      const authReq = req.clone({
        
        headers: req.headers.set('Authorization', `${token}`)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
