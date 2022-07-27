import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/auth/login/login.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./admin/auth/auth.module').then(module => module.AuthModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
