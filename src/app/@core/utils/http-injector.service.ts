// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthJWTInterceptor } from '@nebular/auth';
import { Observable } from 'rxjs';

@Injectable()
export class NbCookieInterceptor extends NbAuthJWTInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and add the cookies as headers and set withCredentials option

    const modifiedRequest = request.clone({
      withCredentials: true,
    });

    return next.handle(modifiedRequest);
  }

}
