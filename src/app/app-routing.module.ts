import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.NgxAuthModule),
  },
  {
    path: 'oauth',
    loadChildren: () => import('./oauth/oauth2-password.module').then(m => m.OAuth2PasswordPlaygroundModule),
  },
  { path: '', redirectTo: 'pages.iot-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages.iot-dashboard' },
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
