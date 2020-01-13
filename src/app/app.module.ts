import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    GoalDetailsComponent,
    QouteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
