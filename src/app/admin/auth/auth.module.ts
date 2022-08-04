import { NgModule } from '@angular/core';
import { FormControlsModule } from 'src/app/shared/components/form-controls/form-controls.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    AuthRoutingModule, FormControlsModule
  ],
  providers: [],
})
export class AuthModule { }
