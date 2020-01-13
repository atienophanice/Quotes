import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.scss']
})
export class QouteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  
  constructor() { }

  ngOnInit() {
  }

}
