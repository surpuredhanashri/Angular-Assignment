import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Output() messageToEmit = new EventEmitter();

  strData = "";
  sendMessageToParent()
  {
    this.messageToEmit.emit(this.strData);
  }
  
  @Input() strNameParentToChild="";
  @Input() ParenttoChild:any={};
  
}
