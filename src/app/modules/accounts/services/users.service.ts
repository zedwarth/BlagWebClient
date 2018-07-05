import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { userQuery } from '../enums/user-querries.enum';
import { User, UsersQueryResponse } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { ApolloQueryResult } from 'apollo-client';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selfDestruct: Observable;
  usersWatchQuery: QueryRef<UsersQueryResponse>;
  usersSubscription;

  private usersQueryInit() {
    this.usersWatchQuery = this.apollo
      .watchQuery<UsersQueryResponse>({ query: userQuery });

    this.usersWatchQuery.valueChanges
      .pipe(
        
      );
  }
  constructor(private apollo: Apollo) { }
}
