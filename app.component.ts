import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './app.component.header';
import {FooterComponent} from './app.component.footer';
import {ContentComponent} from './app.component.content';
import {Myrouter} from './app.component.Myrouting';
import { Demoanimations } from './app.component.demoanimations';
@Component({
  selector: 'app-root',
  animations: [Demoanimations],
  template: `
      <nav>
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a routerLink="/services" routerLinkActive="active">services</a>
          <a routerLink="/contactus" routerLinkActive="active">contactus</a>
      </nav>
      <main [@Demoanimations]="getState(0)">
         <router-outlet #o="outlet"></router-outlet>
      </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

