import { User } from '../../accounts/models/user.model';

export interface Post {
  id: string;
  title: string;
  body: string;
  user_id: User['id'];
}
