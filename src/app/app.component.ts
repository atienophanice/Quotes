import { Component } from '@angular/core';

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
  quotes:string[];

  construtcor(){
  this.quotes=['Act as if what you do makes a difference .It does','Never bend your head.Always hold it high.Look the world straight in the eye','Limit your ALWAYS and your NEVERS']
  }
}
