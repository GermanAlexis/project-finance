import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    SharedModule
  ],
})
export class DashboardModule { }
