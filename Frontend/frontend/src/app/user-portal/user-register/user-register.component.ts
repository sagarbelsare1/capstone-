import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface User {
  lname:String;
  fname:String;
  email:String;
  password:String;
  admin:boolean;
}
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  private registerUrl = 'http://localhost:9092/userRegister';
  
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  loading = true;
  errorMessage = "";

  register(value:any){
   
    const user = <User>{
      email:value.email,
      fname:value.fname,
      lname:value.lname,
      password:value.password,
      admin:value.admin
    }

    return this.http.post(this.registerUrl,user, {
      headers: this.headers}).pipe(catchError(error => this.handleError(error)))
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
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }

}
