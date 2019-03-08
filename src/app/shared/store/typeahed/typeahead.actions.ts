import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_REPOS_FROM_USERNAME = '[Repos] GET REPOS FROM USERNAME',
  SET_REPOS_FROM_USERNAME = '[Repos] SET REPOS FROM USERNAME',
  USERNAME_NOT_FOUND = '[Repos] USERNAME NOT FOUND',
  USER_HAS_NO_REPOS = '[Repos] USER HAS NO REPOS',
}

export class GetReposFromUsername implements Action {
  readonly type = ActionTypes.GET_REPOS_FROM_USERNAME;
  constructor(public payload: string) {}
}

export class SetReposFromUsername implements Action {
  readonly type = ActionTypes.SET_REPOS_FROM_USERNAME;
  constructor(public payload: Array<any>) {}
}

export class UsernameNotFound implements Action {
  readonly type = ActionTypes.USERNAME_NOT_FOUND;
}

export class UserHasNoRepos implements Action {
  readonly type = ActionTypes.USER_HAS_NO_REPOS;
}
