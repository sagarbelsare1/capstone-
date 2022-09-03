import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';

interface Food{
  id:Number,
  foodName:String,
  cuisine:String,
  description:String,
  price:Number,
  enabled:Boolean
}
@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  myParam!: Food;

  form!: FormGroup; 
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.myParam = JSON.parse(params['food']));
    this.form = this.formBuilder.group(this.myParam);
  }

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  loading = true;
  errorMessage = "";
  updateFoodUrl ='http://localhost:9092/updateFoodItem';

   updateFoodItem(food:any){
      const foodItem = <Food>{
      id:food.id,
      foodName:food.foodName,
      cuisine:food.cuisine,
      description:food.description,
      price:food.price,
      enabled:food.enabled
    }

    return this.http.post(this.updateFoodUrl,foodItem, {
      headers: this.headers, responseType: 'text'})
      .pipe(catchError(error => this.handleError(error)))
      .subscribe(response => console.log("Successfull: ", response))
    }

    private handleError(error: HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
        console.error("An error occurred:", error.error.message);
      }else{
        console.error('Backend returned code ${error.status}, ' + 'body was: ${error.error}');
      }
      return throwError(() => new Error("Something bad happened; please try again later"));
    }
   
}
