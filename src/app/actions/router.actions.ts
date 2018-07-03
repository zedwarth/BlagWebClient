import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export enum RouterActionTypes {
  Forward = '[Router] Forward',
  Back    = '[Router] Back',
  Go      = '[Router] Go',
}

export interface GoPayload {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export class Go implements Action {
  readonly type = RouterActionTypes.Go;

  constructor(public payload: GoPayload) { }
}

export class Back implements Action {
  readonly type = RouterActionTypes.Back;
}

export class Forward implements Action {
  readonly type = RouterActionTypes.Forward;
}

export type RouterActions =
  | Go
  | Back
  | Forward;
