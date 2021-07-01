import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  userName: string = 'Maheshkumar';
  userNameValue: boolean = true;

  constructor() {}

  ngOnInit() {}

  onClickClearUserName() {
    this.userNameValue = false;
    this.userName = '';
  }

  onUpdateServerName(event): any {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName.length == 0) {
      this.userNameValue = false;
    } else {
      this.userNameValue = true;
    }
  }
}
