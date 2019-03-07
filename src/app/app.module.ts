import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ResultsComponent } from './typeahead/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
