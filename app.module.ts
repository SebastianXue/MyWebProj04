import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HeaderComponent} from './app.component.header';
import { HeaderComponent } from './app.component.header';
import {FooterComponent} from './app.component.footer';
import {ContentComponent} from './app.component.content';
import { AppComponent } from './app.component';
import {ServiceComponent} from './app.component.services';
import {ContactusComponent} from './app.component.contactus';
import {ServiceContent} from './app.component.serviceContent';
import {ContactusContent} from './app.component.contactusContent';
import {Myrouter} from './app.component.myrouting';
import {StartComponent} from './app.component.start';
import {Getdata} from './app.component.getdata';
import { HttpModule } from '@angular/http';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,ContentComponent,FooterComponent,
    ServiceComponent,ContactusComponent,ServiceContent,ContactusContent,StartComponent
    
  ],
  imports: [
    BrowserModule,Myrouter,BrowserAnimationsModule,HttpModule
  ],
  providers: [Getdata],
  bootstrap: [ AppComponent]
})
export class AppModule { }

