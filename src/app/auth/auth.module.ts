import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [LoginComponent],
  imports:[ 
    CommonModule, ReactiveFormsModule, MatFormFieldModule, MatCardModule, MatInputModule
  ],
  exports:[LoginComponent]
})
export class AuthModule { }