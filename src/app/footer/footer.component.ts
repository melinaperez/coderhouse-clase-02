import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer>footer works!</footer> `,
  styles: [
    `
      footer {
        background-color: green;
      }
    `,
  ],
})
export class FooterComponent {}
