import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { GithubService } from '../../services/github.service';
import * as TypeaheadActions from './typeahead.actions';

@Injectable()
export class TypeaheadEffects {

  @Effect()
  getReposFromUsername$: Observable<any> = this.actions$
    .pipe(
      ofType(TypeaheadActions.GET_REPOS_FROM_USERNAME),
      map((action: TypeaheadActions.GetReposFromUsername) => action.payload),
      switchMap(result => {
        return this.githubService.getUserRepos(result)
          .pipe(
            map((data: any) => {
              if (data && data.length > 0) {
                return new TypeaheadActions.SetReposFromUsername(data);
              }
              return new TypeaheadActions.UserHasNoRepos();
            }),
            // catchError((err) => {
            //   console.log(err);
            //   return new TypeaheadActions.UsernameNotFound();
            // })
          );
      })
    );

  constructor(private actions$: Actions, private githubService: GithubService) {}
}
