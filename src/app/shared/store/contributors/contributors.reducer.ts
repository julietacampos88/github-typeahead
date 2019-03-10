import * as ContributorActions from './contributors.actions';

export interface ContributorsState {
  contributors: Array<any>;
  currentRepo: string;
}

export const initialState: ContributorsState = {
  contributors: [],
  currentRepo: '',
};

export function contributorsReducer(state: ContributorsState = initialState, action: ContributorActions.Actions) {
  switch (action.type) {
    case ContributorActions.SET_REPO_CONTRIBUTORS: {
      const data = action.payload;
      return {
        ...state,
        contributors: data,
      };
    }

    case ContributorActions.GET_REPO_CONTRIBUTORS: {
      const data = action.payload;
      return {
        ...state,
        currentRepo: data.repo
      };
    }

    default: {
      return state;
    }
  }
}

export const getCurrentContributors = (state: ContributorsState) => state.contributors;
export const getCurrentRepo = (state: ContributorsState) => state.currentRepo;
