import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbResetPasswordComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class NgxResetPasswordComponent extends NbResetPasswordComponent implements OnInit {
  // no constructor

  ngOnInit() {

  }

}
