import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { GithubService } from '../../services/github.service';
import * as ContributorsActions from './contributors.actions';

@Injectable()
export class ContributorsEffects {

  @Effect()
  getRepoContributors$: Observable<any> = this.actions$
    .pipe(
      ofType(ContributorsActions.GET_REPO_CONTRIBUTORS),
      map((action: ContributorsActions.GetRepoContributors) => action.payload),
      switchMap(result => {
        const {
          user,
          repo
        } = result;
        return this.githubService.getRepoContributors(user, repo)
          .pipe(
            map((data: any) => {
              if (data && data.length > 0) {
                return new ContributorsActions.SetRepoContributors(data);
              }
            }),
            // catchError((err) => {
            //   console.log(err);
            //   return new ContributorsActions.UsernameNotFound();
            // })
          );
      })
    );

  constructor(private actions$: Actions, private githubService: GithubService) {}
}
