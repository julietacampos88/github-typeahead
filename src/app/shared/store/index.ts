import {
  ActionReducerMap,
  createSelector,
  ActionReducer,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';

import * as TypeaheadReducer from './typeahed/typeahead.reducer';
import { TypeaheadEffects } from './typeahed/typeahead.effects';
import * as ContributorsReducer from './contributors/contributors.reducer';
import { ContributorsEffects } from './contributors/contributors.effects';

export interface State {
  typeahead: TypeaheadReducer.TypeaheadState;
  repo: ContributorsReducer.ContributorsState;
}

// Put all the feature selectors together
export const reducers: ActionReducerMap<State> = {
  typeahead: TypeaheadReducer.typeaheadReducer,
  repo: ContributorsReducer.contributorsReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any) => {
    console.debug('action', action); // tslint:disable-line:no-console
    return reducer(state, action);
  };
}

export function rehydrateState(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any) => { // tslint:disable-line:no-any only-arrow-functions
    if (action.type === 'REHYDRATE_STATE') {
      return action.payload;
    }

    return reducer(state, action);
  };
}

// META-REDUCERS //
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export let metaReducers: Array<MetaReducer<State>> = [
  rehydrateState
];
const devMetaReducers: Array<MetaReducer<State>> = [
  logger
];
const prodMetaReducer: Array<MetaReducer<State>> = [];

// combine all of our reducers into a single metaReducers array according to environment
metaReducers = metaReducers.concat(devMetaReducers); // metaReducers.concat(!environment.production ? devMetaReducers : prodMetaReducer);

export const effects = [
  TypeaheadEffects,
  ContributorsEffects,
];

// typeaheadSelectors

export const TypeaheadFeatureSelector = createFeatureSelector<State, TypeaheadReducer.TypeaheadState>('typeahead');
export const GetReposValueSelector = createSelector(
  TypeaheadFeatureSelector,
  TypeaheadReducer.getCurrentReposSelection
);

export const ShowErrorsValueSelector = createSelector(
  TypeaheadFeatureSelector,
  TypeaheadReducer.doesUserExist
);

export const NoReposValueSelector = createSelector(
  TypeaheadFeatureSelector,
  TypeaheadReducer.isUserWithoutRepos
);

export const GetCurrentUserValueSelection = createSelector(
  TypeaheadFeatureSelector,
  TypeaheadReducer.getCurrentUserSelection
);

// contributors selectors

export const ContributorsFeatureSelector = createFeatureSelector<State, ContributorsReducer.ContributorsState>('repo');
export const GetRepoContributorsValueSelector = createSelector(
  ContributorsFeatureSelector,
  ContributorsReducer.getCurrentContributors
);

export const GetCurrentRepoValueSelector = createSelector(
  ContributorsFeatureSelector,
  ContributorsReducer.getCurrentRepo
);
