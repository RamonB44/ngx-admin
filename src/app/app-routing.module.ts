import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgxLoginComponent } from './auth/login/login.component'; // <---
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.NgxAuthModule),
    // children: [
    //   {
    //     path: '',
    //     component: NbLoginComponent,
    //   },
    //   {
    //     path: 'login',
    //     component: NbLoginComponent,
    //   },
    //   {
    //     path: 'register',
    //     component: NbRegisterComponent,
    //   },
    //   {
    //     path: 'logout',
    //     component: NbLogoutComponent,
    //   },
    //   {
    //     path: 'request-password',
    //     component: NbRequestPasswordComponent,
    //   },
    //   {
    //     path: 'reset-password',
    //     component: NbResetPasswordComponent,
    //   },
    // ],
  },
  { path: '', redirectTo: 'pages.dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages.dashboard' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
