import { Component, OnInit } from '@angular/core';

interface User {
  lname:String;
  fname:String;
  email:String;
  password:String;
  admin:boolean;
}
@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.css']
})
export class AdminWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
