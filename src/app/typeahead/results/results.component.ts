import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as RootState from '../../shared/store';
import { Observable } from 'rxjs';
import * as ContributorActions from '../../shared/store/contributors/contributors.actions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  repos$: Observable<any>;
  currentUser: string;

  constructor(private store: Store<RootState.State>) {
  }

  ngOnInit() {
    this.repos$ = this.store.pipe(select(RootState.GetReposValueSelector));
    this.store.pipe(select(RootState.GetCurrentUserValueSelection)).subscribe(user => this.currentUser = user);
  }

  getContributors(repo: string) {
    console.log('Get contributor');
    this.store.dispatch(new ContributorActions.GetRepoContributors({user: this.currentUser, repo}));
  }

}
