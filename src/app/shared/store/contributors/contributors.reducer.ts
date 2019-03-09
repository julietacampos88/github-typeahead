import * as ContributorActions from './contributors.actions';

export interface ContributorsState {
  contributors: Array<any>;
}

export const initialState: ContributorsState = {
  contributors: []
};

export function contributorsReducer(state: ContributorsState = initialState, action: ContributorActions.Actions) {
  switch (action.type) {
    case ContributorActions.SET_REPO_CONTRIBUTORS: {
      const data = action.payload;
      return {
        ...state,
        contributors: data
      };
    }

    default: {
      return state;
    }
  }
}

export const getCurrentContributors = (state: ContributorsState) => state.contributors;
