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
                <tr>
                   <td>Temprature</td>
                   <td>Description</td>
                </tr>
                <tr *ngFor="let item of resultData">
                <td> {{ item.main.temp }} </td>
                <td> {{ item.weather[0].description }}</td>
                </tr>
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
   
    this.gdata.getData().subscribe(data => this.resultData=data.list);
    console.log(this.resultData);
  }
}


