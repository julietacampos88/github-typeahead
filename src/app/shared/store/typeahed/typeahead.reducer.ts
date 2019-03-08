import { Action } from '@ngrx/store';
import * as TypeaheadActions from './typeahead.actions';
import { ActionTypes } from './typeahead.actions';

export interface TypeaheadState {
  repos: Array<any>;
  errorMessageShow: boolean;
  noRepos: boolean;
}

export const initialState: TypeaheadState = {
  repos: [],
  errorMessageShow: false,
  noRepos: false,
};

export function typeaheadReducer(state = initialState, action: TypeaheadActions.SetReposFromUsername) {
  switch (action.type) {
    case ActionTypes.SET_REPOS_FROM_USERNAME: {
      const data = action.payload;
      return {
        ...state,
        repos: data,
        errorMessageShow: false,
        noRepos: false,
      };
    }

    case ActionTypes.USERNAME_NOT_FOUND: {
      return {
        ...state,
        errorMessageShow: true,
        noRepos: false,
        repos: [],
      };
    }

    case ActionTypes.USER_HAS_NO_REPOS: {
      return {
        ...state,
        errorMessageShow: false,
        noRepos: true,
        repos: [],
      };
    }

    default: {
      return state;
    }
  }
}
