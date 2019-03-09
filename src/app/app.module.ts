import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ResultsComponent } from './typeahead/results/results.component';
import { GithubService } from './shared/services/github.service';
import { GraphComponent } from './graph/graph.component';
import { typeaheadReducer } from './shared/store/typeahed/typeahead.reducer';
import { TypeaheadEffects } from './shared/store/typeahed/typeahead.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent,
    ResultsComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ typeahead: typeaheadReducer }),
    EffectsModule.forRoot([TypeaheadEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
