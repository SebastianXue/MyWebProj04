import { Component } from '@angular/core';
import {animate,style,trigger,transition,query,stagger,group} from '@angular/animations';

export const Demoanimations =trigger('Demoanimations',[
// types of animations.

 transition('*<=>*',[
  query(':enter,:leave',style({color:'green',position:'fixed',width:'auto'}),{optional:true}),
  group([
        query(':enter',[
        style({transform:'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform:'translateX(0%)'}))],{optional:true}),
        query(':leave',[
            style({transform:'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform:'translateX(-100%)'}))    
        ],{optional:true})
        ]),
  ]),
])
