import { Component } from '@angular/core';
import {Myrouter} from './app.component.myrouting';
@Component({
  selector: 'app-header',
  template: `
            <header>
            <h1>Yuan's Angular Project</h1>
            <!--
            <nav>
                <a routerLink="" routerLinkActive="Active">Home</a>
                <a routerLink="/services" routerLinkActive="Active">Services</a>
                <a routerLink="/contactus" routerLinkActive="Active">Contactus</a>
            </nav>
            -->
            <main>
            <router-outlet></router-outlet>
            </main>
            </header>
            <hr>
  `,
  styleUrls: ['./app.component.css']
})
export class HeaderComponent {
  title = 'header';
}
