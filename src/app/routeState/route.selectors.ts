import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRouterState } from './route.state';

//TODO ETAT ROUTER GLOBAL
const getStateRouter =
  createFeatureSelector<RouterReducerState<IRouterState>>('router');

//TODO ETAT ROUTER MODIFIER CUSTOM
export const getCustomStateRouter = createSelector(
  getStateRouter,
  (router) => router.state
);
