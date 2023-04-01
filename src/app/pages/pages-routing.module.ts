import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../@core/services/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,

  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [ AuthGuard ], // here we tell Angular to check the access with our AuthGuard
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
      canActivate: [ AuthGuard ], // here we tell Angular to check the access with our AuthGuard
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
