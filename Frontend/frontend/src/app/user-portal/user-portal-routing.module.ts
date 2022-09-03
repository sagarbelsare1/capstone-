import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseCartComponent } from '../cart/choose-cart/choose-cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';

const routes: Routes = [
  {path: 'chooseCart', component:ChooseCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserPortalRoutingModule { }
