import * as userStore from '../reducers/user.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const getUsers = createFeatureSelector<userStore.UserState>('user');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = userStore.adapter.getSelectors(getUsers);
