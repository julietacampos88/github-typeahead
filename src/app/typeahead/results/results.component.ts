import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as RootState from '../../shared/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  repos$: Array<any>;

  constructor(private store: Store<RootState.State>) {
  }

  ngOnInit() {
    this.store.pipe(select(RootState.GetReposValueSelector)).subscribe(repos => this.repos$ = repos);
  }

}
