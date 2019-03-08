import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, tap, switchMap } from 'rxjs/operators';
import { GithubService } from '../../services/github.service';
import * as TypeaheadActions from './typeahead.actions';

@Injectable()
export class TypeaheadEffects {

  @Effect()
  getReposFromUsername$ = this.actions$
    .pipe(
      ofType(TypeaheadActions.ActionTypes.GET_REPOS_FROM_USERNAME),
      map((action: TypeaheadActions.GetReposFromUsername) => action.payload),
      switchMap(result => {
        return this.githubService.getUserRepos(result)
          .pipe(
            map((data: any) => {
              // // console.log('%c GET REPOS FROM USERNAME ', 'color: #9EDA21', data);
              console.log(data);
              // return new TypeaheadActions.SetReposFromUsername(data);
            })
          );
      })
    );

  constructor(private actions$: Actions, private githubService: GithubService) {}
}
