import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminCuisineComponent } from './admin-cuisine/admin-cuisine.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminCuisineComponent,
    AdminWelcomeComponent
  ],
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class AdminPortalModule { }