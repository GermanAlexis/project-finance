import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


const SHAREDCOMPONENT = [
  FooterComponent,
  SidebarComponent,
  NavbarComponent
]
@NgModule({
  declarations: [ ...SHAREDCOMPONENT ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ ...SHAREDCOMPONENT ]
})
export class SharedModule { }
