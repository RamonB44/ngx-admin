import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbRegisterComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class NgxRegisterComponent extends NbRegisterComponent implements OnInit {
  // no constructor

  ngOnInit() {
    this.service.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.router.navigate(['pages/dashboard']); // Your redirection goes here
      }
    });
  }

}
