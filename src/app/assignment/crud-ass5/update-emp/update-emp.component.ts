import { CRUDService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})

export class UpdateEmpComponent implements OnInit {
  alert:boolean=false

  editEmp = new FormGroup({
    Policy_Holders_Name : new FormControl(''),
    Policy_Amount : new FormControl(''),
    Amount_for_EMI : new FormControl(''),
    Nominees_name : new FormControl(''),
  })
 
  constructor(private router:ActivatedRoute, private CRUD:CRUDService) { }

  empdata:any={}
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
   
    this.CRUD.getCurrentEmpData(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result)
      this.empdata=result;
     this.editEmp = new FormGroup({
    name: new FormControl(this.empdata.name),
    email: new FormControl(this.empdata.email),
    address: new FormControl(this.empdata.address)
  })
 
    })
  
  }

  collection( ){          //onsubmit change
    console.warn("item",this.editEmp.value) 
    this.CRUD.updateEmp(this.router.snapshot.params.id,this.editEmp.value).subscribe((result)=>{
      console.warn("result",result)
      this.alert=true
    })
  }
  closeAlert(){
    this.alert=false
  }
}

