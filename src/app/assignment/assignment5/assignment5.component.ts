import { RestService } from './service/rest.service';
import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css'],
})
export class Assignment5Component implements OnInit {
  constructor(private restService: RestService) {}

  columns = ['User Id', ' First Name', 'Last Name ', 'Email', 'Location'];

  arrUsers: User[] = [];

  ngOnInit() {
    this.readData();
  }

  readData() {
    this.restService.getUsers().subscribe(
      (data) => {
        this.arrUsers = data;
      },
      (error) => console.log(error)
    );
  }

  insertRecord(){
    let userObj = new User(107,'Pooja','Mishra','DM@gmail.com','UP');
    this.restService.insertData(userObj).subscribe(
      (data)=>{
        console.log("Inserted data is"+data);
        this.readData();
      },
      (error)=>console.log("unabled to insert because"+error)
      );
  }

  recordNum="";

  deleteRecord(){
    this.restService.deleteRecord(this.recordNum).subscribe(
      (data)=>{
        this.readData()
      },
      (error)=>console.log("unable to delete record because"+error)
    );
  }

}
