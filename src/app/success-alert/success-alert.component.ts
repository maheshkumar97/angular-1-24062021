import { Component } from '@angular/core';

@Component({
  selector: 'alert-success-alert',
  template: `
    <p>
      success-alert!! You are good :)...
    </p>
  `,
  styles: [
    `
      p {
        padding: 15px;
        background-color: lightgreen;
        border: solid;
        border-radius: 2px;
        color: green;
      }
    `
  ]
})
export class SuccessAlertComponent {}
