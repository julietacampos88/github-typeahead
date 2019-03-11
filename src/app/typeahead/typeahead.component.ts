import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as RootState from '../shared/store/index';
import * as TypeaheadActions from '../shared/store/typeahed/typeahead.actions';
import { Subscription, Observable, timer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as ContributorActions from '../shared/store/contributors/contributors.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit, OnDestroy {

  githubForm: FormGroup;
  formObservable: Subscription;
  currentUserSubscription: Subscription;
  noReposSubscription: Subscription;
  showErrorSubscription: Subscription;
  repos$: Observable<any>;
  currentUser: string;
  hasError = false;
  hasNoRepos = false;

  constructor(private store: Store<RootState.State>, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.formObservable = this.githubForm.valueChanges.pipe(
      debounceTime(200)
    ).subscribe((value) => {
      if (value && value.username) {
        this.store.dispatch(new TypeaheadActions.GetReposFromUsername(value.username));
      }
    });
    this.repos$ = this.store.pipe(select(RootState.GetReposValueSelector));
    this.currentUserSubscription = this.store.pipe(
      select(RootState.GetCurrentUserValueSelection)
      ).subscribe(user => this.currentUser = user);
    this.noReposSubscription = this.store.pipe(
      select(RootState.NoReposValueSelector)
      ).subscribe(hasRepos => this.hasNoRepos = hasRepos);
    this.showErrorSubscription = this.store.pipe(
      select(RootState.ShowErrorsValueSelector)
      ).subscribe(errors => this.hasError = errors);
  }

  ngOnDestroy() {
    this.formObservable.unsubscribe();
    this.currentUserSubscription.unsubscribe();
    this.noReposSubscription.unsubscribe();
    this.showErrorSubscription.unsubscribe();
  }

  createForm() {
    this.githubForm = this.fb.group({
      username: [''],
    });
  }

  getContributors(repo: string) {
    this.store.dispatch(new ContributorActions.GetRepoContributors({user: this.currentUser, repo}));
    this.router.navigate(['/repo']);
  }

}
