import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Post } from '../models/post.model';
import { PostActions, PostActionTypes } from '../actions/post.actions';

export interface PostState extends EntityState<Post> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState: PostState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PostActions
): PostState {
  switch (action.type) {
    case PostActionTypes.AddPost: {
      return adapter.addOne(action.payload.post, state);
    }

    case PostActionTypes.UpsertPost: {
      return adapter.upsertOne(action.payload.post, state);
    }

    case PostActionTypes.AddPosts: {
      return adapter.addMany(action.payload.posts, state);
    }

    case PostActionTypes.UpsertPosts: {
      return adapter.upsertMany(action.payload.posts, state);
    }

    case PostActionTypes.UpdatePost: {
      return adapter.updateOne(action.payload.post, state);
    }

    case PostActionTypes.UpdatePosts: {
      return adapter.updateMany(action.payload.posts, state);
    }

    case PostActionTypes.DeletePost: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PostActionTypes.DeletePosts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PostActionTypes.LoadPosts: {
      return adapter.addAll(action.payload.posts, state);
    }

    case PostActionTypes.ClearPosts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

