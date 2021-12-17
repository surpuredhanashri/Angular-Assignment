import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  iNum=250;
   strName="Dhanashri";
   userObject ={uid:'Dhanashri Surpure' , pwd:'admin'}; 
   studentObject={sid:1,sname:'Ram',marks:100,stream:'Science'};

   insurObj={policyNo:100, policyHoldersName:"Rajat Sharma", AmountOnMaturity:1000, Nominee:"Raman Sharma",EMI:2500 , Duration:12};
   imgURL="./assets/images/images.jpeg";
  bDisableButton=false;
  
   enableButton(){
     this.bDisableButton=false;
   }
  disableButton(){
    this.bDisableButton=true;
   }
   verifyEmail(email:string){
     alert("Please check your email id , we have sent a verification email to you "+email+"\nPlease Click on the given link to verify");
   }
   verifyPhone(phone:string){
     if(phone.length<10){
    alert("Please check your Phone Number, Enter a number of 10 digits");
  }

}
   login(userid:string,pass:string){
     if(userid!="Dhanashri"){
       alert("Invalid User");
     }
     else if(pass!="admin"){
       alert("Invalid User");
     }
     else{
       alert("Valid User");
     }
   }
  strTwoWayDataBinding='Dhanashri Surpure';
  strNameParentToChild="Dhanashri Surpure";
  ParenttoChild={uuid:178,passwd:"admin user"};


}
