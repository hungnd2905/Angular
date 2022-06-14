import { Component, ViewEncapsulation } from '@angular/core';
import { ServerElementComponent } from './server-element/server-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  //ViewEncapsulation default: Emulated: each css is applied only for each component
  //ViewEncapsulation.None: css applied globally to all components
  encapsulation: ViewEncapsulation.None,
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
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
