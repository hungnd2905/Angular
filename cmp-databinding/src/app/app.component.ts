import { Component } from '@angular/core';
import { ServerElementComponent } from './server-element/server-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'Testing Server',
      content: 'Just a test',
    },
    {
      type: 'server',
      name: 'Testing Server',
      content: 'Just a test',
    },
  ];
}
