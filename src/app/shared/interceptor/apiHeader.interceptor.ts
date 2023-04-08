import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // add authorization header to request
    if(localStorage.getItem('adminTocken') && !localStorage.getItem('tocken')){
      const tocken = localStorage.getItem('adminTocken')
      if (tocken) {
        const authReq = req.clone({
          headers: req.headers.set('Authorization', `${tocken}`),
        });
        return next.handle(authReq);
      } else {
        return next.handle(req);
      }
    }else{
      const token = localStorage.getItem('tocken')
      if (token) {
        const authReq = req.clone({
          headers: req.headers.set('Authorization', `${token}`),
        });
        return next.handle(authReq);
      } else {
        return next.handle(req);
      }
    }
     
    
  }
}
