import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './app.component.header';
import {FooterComponent} from './app.component.footer';
import {ContentComponent} from './app.component.content';
import {Myrouter} from './app.component.myrouting';

@Component({
  selector: 'app-home',
  template: `
  <app-header></app-header>
  <app-content></app-content>
  <app-footer></app-footer>


  `,
  styleUrls: ['./app.component.css']
})
export class StartComponent {
  title = 'app';
}
