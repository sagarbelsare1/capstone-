import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ChooseCartComponent } from './choose-cart/choose-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChooseCartComponent,
    PaymentComponent,
    ShowCartComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
