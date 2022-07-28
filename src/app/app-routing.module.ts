import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardRoutes } from './admin/dashboard/dashboard-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./admin/auth/auth.module').then(module => module.AuthModule)
  },
  { path: 'dashboard',
    component: DashboardComponent,
    children:  dashboardRoutes
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
