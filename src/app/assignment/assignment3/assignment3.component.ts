import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  strDataToConvert= 'My name is Dhanashri';

  iCurrencyDate = 3500;

  todayDateMills = Date.now();
  todayDateInDateObj = new Date();
  todayDateInStringFormat = new Date().toDateString();
  
  JsonUserObj = {"uid":120, "name":"Charan Sir", "pwd":"admin"}

  JsonStudentObjs = [
    {"uid":100, "name":"Kumar", "marks": 32},
    {"uid":100, "name":"Abhishree", "marks": 32},
    {"uid":100, "name":"Dhanashri", "marks": 32}
  ]

  iDataForDecimalPipe = 250.42343;
  iDataForPercentPipe = 2.5;
  iDataForSlicePipe = "Dhanashri Surpure";

  iFarent = 0;
  iCelcius =0;

  input1="";

  strslice="Dhanashri Surpure";
strslice1:any="";
strslice2:any="";


StrModify = "Dhanashri Surpure";
StrModify1:any="";
StrModify2:any="";
  

istrCapitalize = "";

iNumber1 = 1;
iNumber2 =2;

//16th Qu.
nameString='';

users=[
  {
    firstName:"Meg",
  Age:22
},
{
  firstName:"Mini",
  Age:24
},

{
  firstName:"Teju",
  Age:21
}
]

addUser(){
  this.users.push({
    firstName:'Alia',
    Age:22
  })
}

reset(){
  this.users=this.users.slice();
}
}
