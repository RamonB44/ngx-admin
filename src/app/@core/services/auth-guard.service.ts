import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {

    return this.authService.isAuthenticatedOrRefresh()
      .pipe(
        tap(authenticated => {
          if (!authenticated) { // false
            // añador peticion para refresh token si falla entoneces enviar al login
            this.router.navigate(['auth/login']);
          }
          // this.router.navigate(['pages/dashboard']);
        }),
      );
  }
}
