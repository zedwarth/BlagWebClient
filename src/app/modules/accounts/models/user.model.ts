import { Post } from '../../content/models/post.model';

export interface User {
  id: string;
  username: string;
  posts: Post[];
}

export type Users = User[];

export interface UsersQueryResponse {
  users: Users;
}
