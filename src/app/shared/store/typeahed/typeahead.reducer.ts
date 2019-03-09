import { Action } from '@ngrx/store';
import * as TypeaheadActions from './typeahead.actions';

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

export function typeaheadReducer(state: TypeaheadState = initialState, action: TypeaheadActions.Actions) {
  switch (action.type) {
    case TypeaheadActions.SET_REPOS_FROM_USERNAME: {
      const data = action.payload;
      console.log('SET REPOS FROM USERNAME', data);
      return {
        ...state,
        repos: data,
        errorMessageShow: false,
        noRepos: false,
      };
    }

    case TypeaheadActions.USERNAME_NOT_FOUND: {
      return {
        ...state,
        errorMessageShow: true,
        noRepos: false,
        repos: [],
      };
    }

    case TypeaheadActions.USER_HAS_NO_REPOS: {
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

export const getCurrentReposSelection = (state: TypeaheadState) => {
  console.log('FROM SELECTOR');
  console.log(state.repos);
  return state.repos;
};
export const isUserWithoutRepos = (state: TypeaheadState) => state.noRepos;
export const doesUserExist = (state: TypeaheadState) => state.errorMessageShow;
