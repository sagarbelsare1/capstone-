import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

interface Food{
  id:Number,
  foodName:String,
  cuisine:String,
  description:String,
  price:Number,
  enabled:Boolean
}
interface Cuisine{
  id:Number,
  cName:String,
}
@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  private registerUrl = 'http://localhost:9092/addFoodItem';
  
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  loading = true;
  errorMessage = "";

  addFoodItem(value:any){
   
    const user = <Food>{
      foodName:value.foodName,
      cuisine:value.cuisine,
      description:value.description,
      price:value.price,
      enabled:value.enabled
    }
    console.log("Sent item: " + JSON.stringify(user))

    return this.http.post(this.registerUrl,user, {
      headers: this.headers, responseType: 'text'})
      .pipe(catchError(error => this.handleError(error)))
      .subscribe((response: any) => console.log("Successfull: ", response))
    }

    private handleError(error: HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
        console.error("An error occurred:", error.error.message);
      }else{
        console.error('Backend returned code ${error.status}, ' + 'body was: ${error.error}');
      }
      return throwError(() => new Error("Something bad happened; please try again later"));
    }


    foods : Food[] = []

    getFood()
    {
      return this.http.get<Food[]>('http://localhost:9092/getFoodItem').subscribe((response) => {this.foods = response});
    }

    rowSelected(food:any){
      this.router.navigate([ "/editFood", JSON.stringify(food)]);
    }

    cuisines : Cuisine[] = []
    
    getCuisines(){
      return this.http.get<Cuisine[]>('http://localhost:9092/getCuisineList').subscribe((response) => {this.cuisines = response;console.log("cuisines: "+JSON.stringify(this.cuisines))});
    }
 
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getCuisines();
    console.log("cuisines: "+JSON.stringify(this.cuisines))
  }

}
