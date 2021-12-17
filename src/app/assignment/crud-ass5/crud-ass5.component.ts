import { employee } from './employee';
import { Component, OnInit } from '@angular/core';
import { CRUDService } from './service/crud.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-ass5',
  templateUrl: './crud-ass5.component.html',
  styleUrls: ['./crud-ass5.component.css'],
})
export class CRUDAss5Component implements OnInit {
  constructor(private CRUD: CRUDService) {}

  columns = [
    'Policy No',
    'Policy Holders Nam',
    'Policy Amount ',
    'Amount for EMI',
    'Nominees name',
    'Delete',
    'Edit'
  ];

  arrEmployee: employee[] = [];

  ngOnInit() {
    this.ReaadData();
  }

  ReaadData() {
    this.CRUD.getUser().subscribe(
      (data) => {
        this.arrEmployee = data;
        console.log(this.arrEmployee);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  PolicyNo = '';
  DeleteData(item: any) {
    this.CRUD.DeleteRecord(item).subscribe(
      (data) => {
        // return this.ReaadData()
        console.log(data), 'data';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addEmp = new FormGroup({
    Policy_Holders_Name : new FormControl(''),
    Policy_Amount : new FormControl(''),
    Amount_for_EMI : new FormControl(''),
    Nominees_name : new FormControl(''),
  })

  collectEmp(){
    this.CRUD.saveEmp(this.addEmp.value).subscribe((
      result
    )=>{
     console.log(result);
    },
    (error)=>{
      console.log(error);
    }
    )
    
  }

  EditData(){
  }
}
