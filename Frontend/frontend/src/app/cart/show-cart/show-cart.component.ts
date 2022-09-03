import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Food{
  id:Number,
  foodName:String,
  cuisine:String,
  description:String,
  price:Number,
  enabled:Boolean
}
@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  cartItems: Array<Food> = []
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.cartItems = JSON.parse(params['cart']));
    this.cartItems.sort((a:Food, b:Food) => a.cuisine.toLowerCase() > b.cuisine.toLowerCase() ? 1 : -1);
    this.totalSum()
  }
  delete(food:any){
    this.cartItems.splice(this.cartItems.findIndex(item => item.id === food.id),1);
    this.totalSum()
  }

  total: any = 0

  totalSum(){
    let totalTemp:any = 0
    
    this.cartItems.forEach(item => totalTemp += item.price)
    this.total = totalTemp

  }

}
