import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.scss'],
})

export class NgxLoginComponent extends NbLoginComponent implements OnInit {

  ngOnInit() {
    this.service.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.router.navigate(['pages/dashboard']); // Your redirection goes here
      }
    });
  }

}
