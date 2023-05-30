import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private http: HttpClient, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.http.post('http://localhost:3000/api/auth/refreshToken', null, { withCredentials: true })
      .pipe(
        map(response => {
          // Do something with response if needed
          console.log(response);
          return true; // Return true to allow navigation
        }),
        catchError(error => {
          // Handle error if needed
          return of(false); // Return false to prevent navigation
        })
      );
  }

}
