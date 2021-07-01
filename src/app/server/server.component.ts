import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: green;
      }
    `
  ]
})
export class ServerComponet {
  serverName: string = 'Server 1';
  serverId: number = 10;
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'lightgreen' : 'rgb(235, 166, 166)';
  }
}
