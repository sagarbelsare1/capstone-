import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Food{
  id:Number,
  foodName:String,
  cuisine:String,
  description:String,
  price:Number,
  enabled:Boolean
}
@Component({
  selector: 'app-choose-cart',
  templateUrl: './choose-cart.component.html',
  styleUrls: ['./choose-cart.component.css']
})
export class ChooseCartComponent implements OnInit {

  searchText!: String

  foods : Food[] = []
  foodsArray : Array<Food> = []

  cartItems : Array<Food> = []

  rowSelected(food:any){
    this.cartItems.push(food)
  }

  getEnabledFood()
    {
      return this.http.get<Food[]>('http://localhost:9092/getEnabledFoodList').subscribe((response) => {this.foods = response; this.sortArray()});
    }
  
  sortArray(){
    this.foods.sort((a:Food, b:Food) => a.cuisine.toLowerCase() > b.cuisine.toLowerCase() ? 1 : -1);
  }
  
    showCart(){
      this.router.navigate([ "/ShowCart", JSON.stringify(this.cartItems)]);
    }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}
