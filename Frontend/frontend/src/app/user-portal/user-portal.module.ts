import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPortalRoutingModule } from './user-portal-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserWelcomeComponent
  ],
  imports: [
    CommonModule,
    UserPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserPortalModule { }
