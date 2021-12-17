import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // @Output() parentcomponent:EventEmitter<any> = new EventEmitter();

  // addNewItem() {
  //   let item={name:'rahul',age:23}
  //   console.warn("Assignment 2");
  //   this.parentcomponent.emit(item);
  // }

  // @Output() saveData: EventEmitter<any> = new EventEmitter();

  // addNewItem() {
  //   this.saveData.emit({ sfsdfz: 'Sdfdsfsdf' });
  // }

  bCustomer = true;

  changeToCustomer() {
    this.bCustomer = true;
  }

  changeToEmployee() {
    this.bCustomer = false;
  }

  strColor = 'red';
  strFontSize = '20';
  strBackgroundColor = 'yellow';
  strFontweight = 'bold';
  strPaddingLeft = '30';

  strCustomer = 'Yes';

  userlist = [
    {
      uid: 1,
      uname: 'Dhanashri',
    },
    {
      uid: 2,
      uname: 'Charan',
    },
    {
      uid: 3,
      uname: 'Surbhi',
    },
  ];

  employee = [
    {
      EmpId: 1,
      Name: 'Charan',
      Dept: 'Full stack',
      Loc: 'Pune',
    },
    {
      EmpId: 1,
      Name: 'Surbhi',
      Dept: 'Full stack',
      Loc: 'Pune',
    },
    {
      EmpId: 1,
      Name: 'Dhanashri',
      Dept: 'Full stack',
      Loc: 'Kolhapur',
    },
  ];

  bMorning = false;
  bEvening = false;

  goodMorning() {
    this.bMorning = true;
    this.bEvening = false;
  }

  goodEvening() {
    this.bEvening = true;
    this.bMorning = false;
  }

  strData = '1';

  login(userid: string, pass: string) {
    if (userid != 'Dhanashri') {
      alert('Invalid User');
    } else if (pass != 'admin') {
      alert('Invalid User');
    } else {
      alert('Valid User');
    }
  }


}
