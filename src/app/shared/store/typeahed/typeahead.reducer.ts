import * as TypeaheadActions from './typeahead.actions';

export interface TypeaheadState {
  repos: Array<any>;
  errorMessageShow: boolean;
  noRepos: boolean;
  currentUser: string;
}

export const initialState: TypeaheadState = {
  repos: [],
  errorMessageShow: false,
  noRepos: false,
  currentUser: '',
};

export function typeaheadReducer(state: TypeaheadState = initialState, action: TypeaheadActions.Actions) {
  switch (action.type) {

    case TypeaheadActions.GET_REPOS_FROM_USERNAME: {
      const data = action.payload;
      return {
        ...state,
        currentUser: data,
      };
    }

    case TypeaheadActions.SET_REPOS_FROM_USERNAME: {
      const data = action.payload;
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

export const getCurrentReposSelection = (state: TypeaheadState) => state.repos;
export const getCurrentUserSelection = (state: TypeaheadState) => state.currentUser;
export const isUserWithoutRepos = (state: TypeaheadState) => state.noRepos;
export const doesUserExist = (state: TypeaheadState) => state.errorMessageShow;
