import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Back, Forward, Go, RouterActionTypes } from '../actions/router.actions';
import { map, tap } from 'rxjs/operators';
import { Router, } from '@angular/router';


@Injectable()
export class AppEffects {

  @Effect({ dispatch: false })
  navigate$ = this.actions$
    .pipe(
      ofType<Go>(RouterActionTypes.Go),
      map(action => action.payload),
      tap(payload => console.log(payload)),
      tap(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
    );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$
    .pipe(
      ofType<Back>(RouterActionTypes.Back),
      tap(() => this.location.back())
    );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$
    .pipe(
      ofType<Forward>(RouterActionTypes.Forward),
      tap(() => this.location.forward())
    );

  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) { }
}
