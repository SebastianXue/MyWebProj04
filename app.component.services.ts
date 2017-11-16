import { Component } from '@angular/core';
import { HeaderComponent } from './app.component.header';
import {FooterComponent} from './app.component.footer';
import {ServiceContent} from './app.component.serviceContent';

@Component({
  selector: 'app-services',
  template: `
          <app-header></app-header>
          <app-services-content></app-services-content>
          <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class ServiceComponent {
  title = 'services';
}

