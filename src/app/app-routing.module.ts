import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/auth/login/login.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
