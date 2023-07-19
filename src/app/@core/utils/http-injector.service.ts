// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthJWTInterceptor } from '@nebular/auth';
import { Observable } from 'rxjs';

@Injectable()
export class NbCookieInterceptor extends NbAuthJWTInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and add the cookies as headers and set withCredentials option
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Accept', 'application/json');
    const modifiedRequest = request.clone({
      // withCredentials: true,
      headers: httpHeaders,
    });

    return next.handle(modifiedRequest);
  }

}
