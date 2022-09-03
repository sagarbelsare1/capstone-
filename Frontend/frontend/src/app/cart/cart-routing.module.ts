import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ShowCartComponent } from './show-cart/show-cart.component';

const routes: Routes = [
  {path: 'ShowCart/:cart', component:ShowCartComponent},
  {path: 'Payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
