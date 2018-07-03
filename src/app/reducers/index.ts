import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '../routing/router-state-url.interface';
import { storeFreeze } from 'ngrx-store-freeze';

export interface RootState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<RootState> = {
  router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<RootState>): ActionReducer<RootState> {
  return function(state: RootState, action: any): RootState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [logger, storeFreeze] : [];
