import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  emptyInput = true;
  userName = '';
  userName2 = '';

  constructor() { }

  ngOnInit() {
  }
  onChangeInput (event: Event) {
    this.userName2 = (<HTMLInputElement>event.target).value;
    this.emptyInput = false;
  }
  resetUserName () {
    this.userName = '';
    this.userName2 = null;
  }
}
