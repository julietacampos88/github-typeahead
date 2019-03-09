import { Action } from '@ngrx/store';

export const GET_REPOS_FROM_USERNAME = '[Repos] GET REPOS FROM USERNAME';
export const SET_REPOS_FROM_USERNAME = '[Repos] SET REPOS FROM USERNAME';
export const USERNAME_NOT_FOUND = '[Repos] USERNAME NOT FOUND';
export const USER_HAS_NO_REPOS = '[Repos] USER HAS NO REPOS';


export class GetReposFromUsername implements Action {
  readonly type = GET_REPOS_FROM_USERNAME;
  constructor(public payload: string) {}
}

export class SetReposFromUsername implements Action {
  readonly type = SET_REPOS_FROM_USERNAME;
  constructor(public payload: Array<any>) {}
}

export class UsernameNotFound implements Action {
  readonly type = USERNAME_NOT_FOUND;
}

export class UserHasNoRepos implements Action {
  readonly type = USER_HAS_NO_REPOS;
}

export type Actions =
  | GetReposFromUsername
  | SetReposFromUsername
  | UsernameNotFound
  | UserHasNoRepos;
