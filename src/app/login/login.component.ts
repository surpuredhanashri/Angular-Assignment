import { Component, OnInit } from '@angular/core';
// import {  } from ".././assignement/assignment2/assignment2.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveData(event:any) {
    console.log(event);
  }
  
//  name1="";
//  parentcomponent(data?:any){
//   console.warn("here");
//    console.warn(data);
  
//    this.name1=data.name1
//  }
  

}
