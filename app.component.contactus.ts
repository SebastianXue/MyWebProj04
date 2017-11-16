import { Component } from '@angular/core';
import { HeaderComponent } from './app.component.header';
import {FooterComponent} from './app.component.footer';
import {ContactusContent} from './app.component.contactusContent';
import {Getdata} from './app.component.getdata';
@Component({
  selector: 'app-contactus',
  template: `
          <app-header></app-header>
          <app-contactus-content></app-contactus-content>
          <app-footer></app-footer>

  `,
  styleUrls: ['./app.component.css']
})
export class ContactusComponent {
  title = 'contactus';
 // constructor(private gudata:Getdata){};
  resultData={};
}

