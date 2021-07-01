import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // common selector style
  // selector:[app-servers] this one as attribute selector
  // selector: '.app-servers this one as class selector
  // template: `
  //   <p>servers works!</p>

  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName: string;
  server: boolean;
  buttonDesc = 'Add Server';
  allowUsertoClick = false;
  createServer: string; //= 'No server created, Example server ' + this.serverName;
  constructor() {
    setInterval(() => {
      this.allowUsertoClick = true;
    }, 2000);
  }

  ngOnInit() {}

  onServerCreate() {
    if (!this.server && this.serverName !== '') {
      this.server = true;
      this.createServer =
        'Server was Created. Name of the server::' + this.serverName;
      this.buttonDesc = 'Delete Server';
    } else {
      this.server = false;
      this.createServer = 'Server Deleted!';
      this.buttonDesc = 'Create Server';
    }
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
