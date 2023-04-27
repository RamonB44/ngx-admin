/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  NbAlertModule, NbCardModule, NbInputModule, NbLayoutModule,
} from '@nebular/theme';

import { OAuth2PasswordLoginComponent } from './login/oauth2-password-login.component';
import { Oauth2PasswordRoutingModule } from './oauth2-password-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NbCardModule,
    NbLayoutModule,
    NbAlertModule,
    NbInputModule,
    Oauth2PasswordRoutingModule,
  ],
  declarations: [
    OAuth2PasswordLoginComponent,
  ],
})

export class OAuth2PasswordPlaygroundModule {
}
