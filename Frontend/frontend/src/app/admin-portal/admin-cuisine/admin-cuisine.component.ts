import { HttpClient, HttpErrorResponse, HttpHeaders,  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface Cuisine{
  id:Number,
  cName:String,
}
@Component({
  selector: 'app-admin-cuisine',
  templateUrl: './admin-cuisine.component.html',
  styleUrls: ['./admin-cuisine.component.css']
})
export class AdminCuisineComponent implements OnInit {

  private addCuisineUrl = 'http://localhost:9092/addCuisine';
  
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  loading = true;
  errorMessage = "";

  addCuisine(value:any){
  

    return this.http.post(this.addCuisineUrl,value, {
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

    cuisines : Cuisine[] = []

    getCuisines(){
      return this.http.get<Cuisine[]>('http://localhost:9092/getCuisineList').subscribe((response) => {this.cuisines = response});
    }

    rowSelected(cuisine:any){}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
