import * as postStore from '../reducers/post.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const getPostStore = createFeatureSelector<postStore.PostState>('post');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = postStore.adapter.getSelectors(getPostStore);
