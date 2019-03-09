import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../shared/services/github.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as RootState from '../shared/store/index';
import * as TypeaheadActions from '../shared/store/typeahed/typeahead.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit, OnDestroy {

  githubForm: FormGroup;
  formObservable: Subscription;

  constructor(private store: Store<RootState.State>, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.formObservable = this.githubForm.valueChanges.subscribe((value) => {
      if (value && value.username) {
        console.log(value.username);
        this.store.dispatch(new TypeaheadActions.GetReposFromUsername(value.username));
      }
    });
  }

  ngOnDestroy() {
    this.formObservable.unsubscribe();
  }

  createForm() {
    this.githubForm = this.fb.group({
      username: [''],
    });
  }

}
