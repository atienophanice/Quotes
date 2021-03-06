import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]= [
    new Quote(1,'Act as if what you do makes a difference .It does', ' AWilliam Havy',new Date (2020,1,2)),
    new Quote(2,'Limit your ALWAYS and your NEVERS','Jackson Grate', new Date(2019,3,3)),
    new Quote(3,'Never bend your head.Always hold it high.Look the world straight in the eye','Hellen Hadson',new Date(2019,6,6))
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete=confirm('Are younsure youb want to delete ${this.quote[index].name}?')
      
      if(toDelete)
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  upvote(quote){
    quote.count=quote.count +1;
  }

  downvote(quote){
    quote.count2=quote.count2 +1;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
