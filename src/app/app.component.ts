import { Component, OnInit } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  quotes:Quote[]= [
    new Quote(1,'Act as if what you do makes a difference .It does' ,'William Havy'),
    new Quote(2,'Limit your ALWAYS and your NEVERS','Jackson Great'),
    new Quote(3,'Never bend your head.Always hold it high.Look the world straight in the eye','Hellen Hadson'),
  ];
  
}