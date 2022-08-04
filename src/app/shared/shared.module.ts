import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/form-controls/input/input.component';
import { ButtonComponent } from './components/form-controls/button/button.component';
import { FormControlsModule } from './components/form-controls/form-controls.module';


const SHAREDCOMPONENT = [
  FooterComponent,
  SidebarComponent,
  NavbarComponent,
]
@NgModule({
  declarations: [ ...SHAREDCOMPONENT ],
  imports: [
    CommonModule,
    FormControlsModule,
    RouterModule
  ],
  exports: [ ...SHAREDCOMPONENT, FormControlsModule  ]
})
export class SharedModule { }
