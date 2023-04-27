import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbRequestPasswordComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss'],
})
export class NgxRequestPasswordComponent extends NbRequestPasswordComponent implements OnInit {
  // no constructor

  ngOnInit() {
    this.service.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.router.navigate(['pages/dashboard']); // Your redirection goes here
      }
    });
  }

}
