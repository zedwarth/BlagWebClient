import { Injectable } from '@angular/core';
import { map, takeUntil, tap } from 'rxjs/operators';
import { UpsertUsers } from '../../accounts/actions/user.actions';
import { Apollo, QueryRef } from 'apollo-angular';
import { UsersQueryResponse } from '../../accounts/models/user.model';
import { Store } from '@ngrx/store';
import { userQuery } from '../../accounts/enums/user-querries.enum';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private selfDestruct$;
  postsWatchQuery: QueryRef<UsersQueryResponse>;

  private postsQueryInit() {
    // TODO
    // this.postsWatchQuery = this.apollo
    //   .watchQuery<UsersQueryResponse>({ query: userQuery });
    //
    // this.postsWatchQuery.valueChanges
    //   .pipe(
    //     takeUntil(this.selfDestruct$),
    //     map(response => response.data.users),
    //     map(users => new UpsertUsers({ users: users })),
    //     tap(action => this.store.dispatch(action))
    //   ).subscribe();
  }
  constructor(private apollo: Apollo,
              private store: Store<any>) {  }

  create() {
    this.selfDestruct$ = ReplaySubject.create();
    this.postsQueryInit();
  }

  destroy() {
    this.selfDestruct$.next();
  }
}
