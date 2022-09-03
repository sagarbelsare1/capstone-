import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodlistComponent } from '../food/foodlist/foodlist.component';
import { AdminCuisineComponent } from './admin-cuisine/admin-cuisine.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path:"FoodItem", component:FoodlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
