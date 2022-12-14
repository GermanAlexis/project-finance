import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [InputComponent, ButtonComponent],
})
export class FormControlsModule {}
