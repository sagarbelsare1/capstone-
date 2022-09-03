import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCuisineComponent } from '../admin-portal/admin-cuisine/admin-cuisine.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

const routes: Routes = [
  {path: 'editFood/:food', component:EditFoodComponent},
  {path: 'AdminCuisine', component:AdminCuisineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
