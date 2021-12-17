import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp66';

  strTwoWayDataBinding = 'Dhanashri Surpure';
  strNameParentToChild = 'Dhanashri Surpure';
  ParenttoChild = { uuid: 178, passwd: 'admin user' };



  textShow = false;
  
  showText() {
    this.textShow = true;
  }

  hideText() {
    this.textShow = false;
  }

  strMsgFromChild = "";
  getMessage(msg:any){
    this.strMsgFromChild = msg;
  }
  
}
