import { Action } from '@ngrx/store';

export const GET_REPO_CONTRIBUTORS = '[Contributors] GET REPO CONTRIBUTORS';
export const SET_REPO_CONTRIBUTORS = '[Conributors] SET REPO CONTRIBUTORS';

export class GetRepoContributors implements Action {
  readonly type = GET_REPO_CONTRIBUTORS;
  constructor(public payload: any) {}
}

export class SetRepoContributors implements Action {
  readonly type = SET_REPO_CONTRIBUTORS;
  constructor(public payload: any) {}
}

export type Actions =
  | GetRepoContributors
  | SetRepoContributors;
