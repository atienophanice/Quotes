import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quotes:Quote[]= [
    {id:1, name:'Act as if what you do makes a difference .It does'},
    {id:2,name:'Limit your ALWAYS and your NEVERS'},
    {id:3,name:'Never bend your head.Always hold it high.Look the world straight in the eye'},
  ];
  }
