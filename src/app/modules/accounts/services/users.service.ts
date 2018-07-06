import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { userQuery } from '../enums/user-querries.enum';
import { UsersQueryResponse } from '../models/user.model';
import { map, takeUntil, tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { UpsertUsers } from '../actions/user.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private selfDestruct$;
  usersWatchQuery: QueryRef<UsersQueryResponse>;

  private usersQueryInit() {
    this.usersWatchQuery = this.apollo
      .watchQuery<UsersQueryResponse>({ query: userQuery });

    this.usersWatchQuery.valueChanges
      .pipe(
        takeUntil(this.selfDestruct$),
        map(response => response.data.users),
        map(users => new UpsertUsers({ users: users })),
        tap(action => this.store.dispatch(action))
      ).subscribe();
  }
  constructor(private apollo: Apollo,
              private store: Store<any>) {  }

  create() {
    this.selfDestruct$ = ReplaySubject.create();
    this.usersQueryInit();
  }

  destroy() {
    this.selfDestruct$.next();
  }
}
