import { Component } from '@angular/core';
import {Getdata} from './app.component.getdata';
@Component({
  selector: 'app-contactus-content',
  template:`
        <main>
            <section>
            <article>
                <h1>learn to call back end data</h1>
                <div>
                <button (click)="dataload()">display data</button>
                <ul>
                <li *ngFor="let item of resultData">{{ item }}</li>
                </ul>
                </div>
            </article>
            </section>
        </main>
            <hr>
  `,
  styleUrls: ['./app.component.css']
})
export class ContactusContent {
  title = 'contactuscontent';
  constructor(private gdata:Getdata){};
  resultData={};
  dataload() {
    this.gdata.getData().subscribe(data => this.resultData=data.results);
    console.log(this.resultData);
  }
}


