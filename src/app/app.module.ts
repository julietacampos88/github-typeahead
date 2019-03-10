import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as RootSelector from './shared/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ResultsComponent } from './typeahead/results/results.component';
import { GithubService } from './shared/services/github.service';
import { GraphComponent } from './graph/graph.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { OcticonsDirective } from './shared/octicons.directive';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent,
    ResultsComponent,
    GraphComponent,
    OcticonsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(RootSelector.reducers),
    EffectsModule.forRoot(RootSelector.effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
