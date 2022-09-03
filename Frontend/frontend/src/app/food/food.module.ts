import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditFoodComponent,
    FoodlistComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FoodModule { }
